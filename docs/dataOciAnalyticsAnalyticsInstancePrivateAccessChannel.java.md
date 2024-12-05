# `dataOciAnalyticsAnalyticsInstancePrivateAccessChannel` Submodule <a name="`dataOciAnalyticsAnalyticsInstancePrivateAccessChannel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannel <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .analyticsInstanceId(java.lang.String)
    .privateAccessChannelKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateAccessChannelKey">privateAccessChannelKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.analyticsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}.

---

##### `privateAccessChannelKey`<sup>Required</sup> <a name="privateAccessChannelKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.privateAccessChannelKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciAnalyticsAnalyticsInstancePrivateAccessChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses">egressSourceIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones">privateSourceDnsZones</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts">privateSourceScanHosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput">analyticsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKeyInput">privateAccessChannelKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKey">privateAccessChannelKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `egressSourceIpAddresses`<sup>Required</sup> <a name="egressSourceIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses"></a>

```java
public java.util.List<java.lang.String> getEgressSourceIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateSourceDnsZones`<sup>Required</sup> <a name="privateSourceDnsZones" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList getPrivateSourceDnsZones();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a>

---

##### `privateSourceScanHosts`<sup>Required</sup> <a name="privateSourceScanHosts" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList getPrivateSourceScanHosts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `analyticsInstanceIdInput`<sup>Optional</sup> <a name="analyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput"></a>

```java
public java.lang.String getAnalyticsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `privateAccessChannelKeyInput`<sup>Optional</sup> <a name="privateAccessChannelKeyInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKeyInput"></a>

```java
public java.lang.String getPrivateAccessChannelKeyInput();
```

- *Type:* java.lang.String

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

---

##### `privateAccessChannelKey`<sup>Required</sup> <a name="privateAccessChannelKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKey"></a>

```java
public java.lang.String getPrivateAccessChannelKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .analyticsInstanceId(java.lang.String)
    .privateAccessChannelKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateAccessChannelKey">privateAccessChannelKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}.

---

##### `privateAccessChannelKey`<sup>Required</sup> <a name="privateAccessChannelKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateAccessChannelKey"></a>

```java
public java.lang.String getPrivateAccessChannelKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}.

---

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.builder()
    .build();
```


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts;

DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList;

new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference;

new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone">dnsZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone"></a>

```java
public java.lang.String getDnsZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList;

new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance_private_access_channel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference;

new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname">scanHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort">scanPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `scanHostname`<sup>Required</sup> <a name="scanHostname" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname"></a>

```java
public java.lang.String getScanHostname();
```

- *Type:* java.lang.String

---

##### `scanPort`<sup>Required</sup> <a name="scanPort" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort"></a>

```java
public java.lang.Number getScanPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue"></a>

```java
public DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>

---



