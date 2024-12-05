# `dataOciDnsSteeringPolicy` Submodule <a name="`dataOciDnsSteeringPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicy <a name="DataOciDnsSteeringPolicy" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy oci_dns_steering_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicy;

DataOciDnsSteeringPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .steeringPolicyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy#steering_policy_id DataOciDnsSteeringPolicy#steering_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.Initializer.parameter.steeringPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy#steering_policy_id DataOciDnsSteeringPolicy#steering_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicy;

DataOciDnsSteeringPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicy;

DataOciDnsSteeringPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicy;

DataOciDnsSteeringPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicy;

DataOciDnsSteeringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDnsSteeringPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDnsSteeringPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDnsSteeringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.answers">answers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList">DataOciDnsSteeringPolicyAnswersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.healthCheckMonitorId">healthCheckMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList">DataOciDnsSteeringPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.steeringPolicyIdInput">steeringPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `answers`<sup>Required</sup> <a name="answers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.answers"></a>

```java
public DataOciDnsSteeringPolicyAnswersList getAnswers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList">DataOciDnsSteeringPolicyAnswersList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `healthCheckMonitorId`<sup>Required</sup> <a name="healthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.healthCheckMonitorId"></a>

```java
public java.lang.String getHealthCheckMonitorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.rules"></a>

```java
public DataOciDnsSteeringPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList">DataOciDnsSteeringPolicyRulesList</a>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `steeringPolicyIdInput`<sup>Optional</sup> <a name="steeringPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.steeringPolicyIdInput"></a>

```java
public java.lang.String getSteeringPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.steeringPolicyId"></a>

```java
public java.lang.String getSteeringPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPolicyAnswers <a name="DataOciDnsSteeringPolicyAnswers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyAnswers;

DataOciDnsSteeringPolicyAnswers.builder()
    .build();
```


### DataOciDnsSteeringPolicyConfig <a name="DataOciDnsSteeringPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyConfig;

DataOciDnsSteeringPolicyConfig.builder()
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
    .steeringPolicyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.steeringPolicyId">steeringPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy#steering_policy_id DataOciDnsSteeringPolicy#steering_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyConfig.property.steeringPolicyId"></a>

```java
public java.lang.String getSteeringPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy#steering_policy_id DataOciDnsSteeringPolicy#steering_policy_id}.

---

### DataOciDnsSteeringPolicyRules <a name="DataOciDnsSteeringPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRules;

DataOciDnsSteeringPolicyRules.builder()
    .build();
```


### DataOciDnsSteeringPolicyRulesCases <a name="DataOciDnsSteeringPolicyRulesCases" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCases;

DataOciDnsSteeringPolicyRulesCases.builder()
    .build();
```


### DataOciDnsSteeringPolicyRulesCasesAnswerData <a name="DataOciDnsSteeringPolicyRulesCasesAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCasesAnswerData;

DataOciDnsSteeringPolicyRulesCasesAnswerData.builder()
    .build();
```


### DataOciDnsSteeringPolicyRulesDefaultAnswerData <a name="DataOciDnsSteeringPolicyRulesDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesDefaultAnswerData;

DataOciDnsSteeringPolicyRulesDefaultAnswerData.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsSteeringPolicyAnswersList <a name="DataOciDnsSteeringPolicyAnswersList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyAnswersList;

new DataOciDnsSteeringPolicyAnswersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.get"></a>

```java
public DataOciDnsSteeringPolicyAnswersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyAnswersOutputReference <a name="DataOciDnsSteeringPolicyAnswersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyAnswersOutputReference;

new DataOciDnsSteeringPolicyAnswersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.isDisabled">isDisabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.pool">pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.rdata">rdata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.rtype">rtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswers">DataOciDnsSteeringPolicyAnswers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.isDisabled"></a>

```java
public IResolvable getIsDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pool`<sup>Required</sup> <a name="pool" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.rdata"></a>

```java
public java.lang.String getRdata();
```

- *Type:* java.lang.String

---

##### `rtype`<sup>Required</sup> <a name="rtype" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.rtype"></a>

```java
public java.lang.String getRtype();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswersOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyAnswers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyAnswers">DataOciDnsSteeringPolicyAnswers</a>

---


### DataOciDnsSteeringPolicyRulesCasesAnswerDataList <a name="DataOciDnsSteeringPolicyRulesCasesAnswerDataList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList;

new DataOciDnsSteeringPolicyRulesCasesAnswerDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.get"></a>

```java
public DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference <a name="DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference;

new DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep">shouldKeep</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerData">DataOciDnsSteeringPolicyRulesCasesAnswerData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerCondition`<sup>Required</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

---

##### `shouldKeep`<sup>Required</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep"></a>

```java
public IResolvable getShouldKeep();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyRulesCasesAnswerData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerData">DataOciDnsSteeringPolicyRulesCasesAnswerData</a>

---


### DataOciDnsSteeringPolicyRulesCasesList <a name="DataOciDnsSteeringPolicyRulesCasesList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCasesList;

new DataOciDnsSteeringPolicyRulesCasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.get"></a>

```java
public DataOciDnsSteeringPolicyRulesCasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyRulesCasesOutputReference <a name="DataOciDnsSteeringPolicyRulesCasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesCasesOutputReference;

new DataOciDnsSteeringPolicyRulesCasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.answerData">answerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList">DataOciDnsSteeringPolicyRulesCasesAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.caseCondition">caseCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCases">DataOciDnsSteeringPolicyRulesCases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerData`<sup>Required</sup> <a name="answerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.answerData"></a>

```java
public DataOciDnsSteeringPolicyRulesCasesAnswerDataList getAnswerData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesAnswerDataList">DataOciDnsSteeringPolicyRulesCasesAnswerDataList</a>

---

##### `caseCondition`<sup>Required</sup> <a name="caseCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.caseCondition"></a>

```java
public java.lang.String getCaseCondition();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyRulesCases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCases">DataOciDnsSteeringPolicyRulesCases</a>

---


### DataOciDnsSteeringPolicyRulesDefaultAnswerDataList <a name="DataOciDnsSteeringPolicyRulesDefaultAnswerDataList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList;

new DataOciDnsSteeringPolicyRulesDefaultAnswerDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.get"></a>

```java
public DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference <a name="DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference;

new DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition">answerCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep">shouldKeep</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerData">DataOciDnsSteeringPolicyRulesDefaultAnswerData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answerCondition`<sup>Required</sup> <a name="answerCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition"></a>

```java
public java.lang.String getAnswerCondition();
```

- *Type:* java.lang.String

---

##### `shouldKeep`<sup>Required</sup> <a name="shouldKeep" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep"></a>

```java
public IResolvable getShouldKeep();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyRulesDefaultAnswerData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerData">DataOciDnsSteeringPolicyRulesDefaultAnswerData</a>

---


### DataOciDnsSteeringPolicyRulesList <a name="DataOciDnsSteeringPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesList;

new DataOciDnsSteeringPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.get"></a>

```java
public DataOciDnsSteeringPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDnsSteeringPolicyRulesOutputReference <a name="DataOciDnsSteeringPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dns_steering_policy.DataOciDnsSteeringPolicyRulesOutputReference;

new DataOciDnsSteeringPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.cases">cases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList">DataOciDnsSteeringPolicyRulesCasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.defaultAnswerData">defaultAnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList">DataOciDnsSteeringPolicyRulesDefaultAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.defaultCount">defaultCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRules">DataOciDnsSteeringPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cases`<sup>Required</sup> <a name="cases" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.cases"></a>

```java
public DataOciDnsSteeringPolicyRulesCasesList getCases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesCasesList">DataOciDnsSteeringPolicyRulesCasesList</a>

---

##### `defaultAnswerData`<sup>Required</sup> <a name="defaultAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.defaultAnswerData"></a>

```java
public DataOciDnsSteeringPolicyRulesDefaultAnswerDataList getDefaultAnswerData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesDefaultAnswerDataList">DataOciDnsSteeringPolicyRulesDefaultAnswerDataList</a>

---

##### `defaultCount`<sup>Required</sup> <a name="defaultCount" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.defaultCount"></a>

```java
public java.lang.Number getDefaultCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRulesOutputReference.property.internalValue"></a>

```java
public DataOciDnsSteeringPolicyRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicy.DataOciDnsSteeringPolicyRules">DataOciDnsSteeringPolicyRules</a>

---



