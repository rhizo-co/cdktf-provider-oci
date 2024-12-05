# `dataOciAnalyticsAnalyticsInstance` Submodule <a name="`dataOciAnalyticsAnalyticsInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstance <a name="DataOciAnalyticsAnalyticsInstance" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance oci_analytics_analytics_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstance;

DataOciAnalyticsAnalyticsInstance.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance#analytics_instance_id DataOciAnalyticsAnalyticsInstance#analytics_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.Initializer.parameter.analyticsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance#analytics_instance_id DataOciAnalyticsAnalyticsInstance#analytics_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstance;

DataOciAnalyticsAnalyticsInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstance;

DataOciAnalyticsAnalyticsInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstance;

DataOciAnalyticsAnalyticsInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstance;

DataOciAnalyticsAnalyticsInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciAnalyticsAnalyticsInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciAnalyticsAnalyticsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.adminUser">adminUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList">DataOciAnalyticsAnalyticsInstanceCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.emailNotification">emailNotification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.featureBundle">featureBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.featureSet">featureSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.serviceUrl">serviceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.updateChannel">updateChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.analyticsInstanceIdInput">analyticsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.adminUser"></a>

```java
public java.lang.String getAdminUser();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.capacity"></a>

```java
public DataOciAnalyticsAnalyticsInstanceCapacityList getCapacity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList">DataOciAnalyticsAnalyticsInstanceCapacityList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `emailNotification`<sup>Required</sup> <a name="emailNotification" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.emailNotification"></a>

```java
public java.lang.String getEmailNotification();
```

- *Type:* java.lang.String

---

##### `featureBundle`<sup>Required</sup> <a name="featureBundle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.featureBundle"></a>

```java
public java.lang.String getFeatureBundle();
```

- *Type:* java.lang.String

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.featureSet"></a>

```java
public java.lang.String getFeatureSet();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.networkEndpointDetails"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList getNetworkEndpointDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList</a>

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.serviceUrl"></a>

```java
public java.lang.String getServiceUrl();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updateChannel`<sup>Required</sup> <a name="updateChannel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.updateChannel"></a>

```java
public java.lang.String getUpdateChannel();
```

- *Type:* java.lang.String

---

##### `analyticsInstanceIdInput`<sup>Optional</sup> <a name="analyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.analyticsInstanceIdInput"></a>

```java
public java.lang.String getAnalyticsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstanceCapacity <a name="DataOciAnalyticsAnalyticsInstanceCapacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceCapacity;

DataOciAnalyticsAnalyticsInstanceCapacity.builder()
    .build();
```


### DataOciAnalyticsAnalyticsInstanceConfig <a name="DataOciAnalyticsAnalyticsInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceConfig;

DataOciAnalyticsAnalyticsInstanceConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.analyticsInstanceId">analyticsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance#analytics_instance_id DataOciAnalyticsAnalyticsInstance#analytics_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsInstanceId`<sup>Required</sup> <a name="analyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceConfig.property.analyticsInstanceId"></a>

```java
public java.lang.String getAnalyticsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance#analytics_instance_id DataOciAnalyticsAnalyticsInstance#analytics_instance_id}.

---

### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails;

DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails.builder()
    .build();
```


### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns;

DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstanceCapacityList <a name="DataOciAnalyticsAnalyticsInstanceCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceCapacityList;

new DataOciAnalyticsAnalyticsInstanceCapacityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.get"></a>

```java
public DataOciAnalyticsAnalyticsInstanceCapacityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnalyticsAnalyticsInstanceCapacityOutputReference <a name="DataOciAnalyticsAnalyticsInstanceCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference;

new DataOciAnalyticsAnalyticsInstanceCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType">capacityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue">capacityValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacity">DataOciAnalyticsAnalyticsInstanceCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityType"></a>

```java
public java.lang.String getCapacityType();
```

- *Type:* java.lang.String

---

##### `capacityValue`<sup>Required</sup> <a name="capacityValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.capacityValue"></a>

```java
public java.lang.Number getCapacityValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacityOutputReference.property.internalValue"></a>

```java
public DataOciAnalyticsAnalyticsInstanceCapacity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceCapacity">DataOciAnalyticsAnalyticsInstanceCapacity</a>

---


### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList;

new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.get"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference;

new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices">whitelistedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns">whitelistedVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```java
public java.util.List<java.lang.String> getWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `whitelistedServices`<sup>Required</sup> <a name="whitelistedServices" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```java
public java.util.List<java.lang.String> getWhitelistedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `whitelistedVcns`<sup>Required</sup> <a name="whitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList getWhitelistedVcns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails</a>

---


### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList;

new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_analytics_analytics_instance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference;

new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```java
public java.util.List<java.lang.String> getWhitelistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```java
public DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstance.DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns</a>

---



