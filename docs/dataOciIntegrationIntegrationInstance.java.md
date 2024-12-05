# `dataOciIntegrationIntegrationInstance` Submodule <a name="`dataOciIntegrationIntegrationInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIntegrationIntegrationInstance <a name="DataOciIntegrationIntegrationInstance" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance oci_integration_integration_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstance;

DataOciIntegrationIntegrationInstance.Builder.create(Construct scope, java.lang.String id)
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
    .integrationInstanceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.Initializer.parameter.integrationInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstance;

DataOciIntegrationIntegrationInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstance;

DataOciIntegrationIntegrationInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstance;

DataOciIntegrationIntegrationInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstance;

DataOciIntegrationIntegrationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIntegrationIntegrationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIntegrationIntegrationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIntegrationIntegrationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIntegrationIntegrationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList">DataOciIntegrationIntegrationInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList">DataOciIntegrationIntegrationInstanceCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dataRetentionPeriod">dataRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.disasterRecoveryDetails">disasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.failoverTrigger">failoverTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsAt">idcsAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList">DataOciIntegrationIntegrationInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceDesignTimeUrl">instanceDesignTimeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceType">integrationInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isByol">isByol</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.messagePacks">messagePacks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.privateEndpointOutboundConnection">privateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceIdInput">integrationInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.alternateCustomEndpoints"></a>

```java
public DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList getAlternateCustomEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.attachments"></a>

```java
public DataOciIntegrationIntegrationInstanceAttachmentsList getAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList">DataOciIntegrationIntegrationInstanceAttachmentsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.consumptionModel"></a>

```java
public java.lang.String getConsumptionModel();
```

- *Type:* java.lang.String

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.customEndpoint"></a>

```java
public DataOciIntegrationIntegrationInstanceCustomEndpointList getCustomEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList">DataOciIntegrationIntegrationInstanceCustomEndpointList</a>

---

##### `dataRetentionPeriod`<sup>Required</sup> <a name="dataRetentionPeriod" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.dataRetentionPeriod"></a>

```java
public java.lang.String getDataRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `disasterRecoveryDetails`<sup>Required</sup> <a name="disasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.disasterRecoveryDetails"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList getDisasterRecoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `enableProcessAutomationTrigger`<sup>Required</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.enableProcessAutomationTrigger"></a>

```java
public java.lang.Number getEnableProcessAutomationTrigger();
```

- *Type:* java.lang.Number

---

##### `extendDataRetentionTrigger`<sup>Required</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.extendDataRetentionTrigger"></a>

```java
public java.lang.Number getExtendDataRetentionTrigger();
```

- *Type:* java.lang.Number

---

##### `failoverTrigger`<sup>Required</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.failoverTrigger"></a>

```java
public java.lang.Number getFailoverTrigger();
```

- *Type:* java.lang.Number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAt`<sup>Required</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsAt"></a>

```java
public java.lang.String getIdcsAt();
```

- *Type:* java.lang.String

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.idcsInfo"></a>

```java
public DataOciIntegrationIntegrationInstanceIdcsInfoList getIdcsInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList">DataOciIntegrationIntegrationInstanceIdcsInfoList</a>

---

##### `instanceDesignTimeUrl`<sup>Required</sup> <a name="instanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceDesignTimeUrl"></a>

```java
public java.lang.String getInstanceDesignTimeUrl();
```

- *Type:* java.lang.String

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceType"></a>

```java
public java.lang.String getIntegrationInstanceType();
```

- *Type:* java.lang.String

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isByol"></a>

```java
public IResolvable getIsByol();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDisasterRecoveryEnabled`<sup>Required</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isDisasterRecoveryEnabled"></a>

```java
public IResolvable getIsDisasterRecoveryEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFileServerEnabled`<sup>Required</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isFileServerEnabled"></a>

```java
public IResolvable getIsFileServerEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.isVisualBuilderEnabled"></a>

```java
public IResolvable getIsVisualBuilderEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.messagePacks"></a>

```java
public java.lang.Number getMessagePacks();
```

- *Type:* java.lang.Number

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.networkEndpointDetails"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList getNetworkEndpointDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList</a>

---

##### `privateEndpointOutboundConnection`<sup>Required</sup> <a name="privateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.privateEndpointOutboundConnection"></a>

```java
public DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList getPrivateEndpointOutboundConnection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `integrationInstanceIdInput`<sup>Optional</sup> <a name="integrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceIdInput"></a>

```java
public java.lang.String getIntegrationInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints;

DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceAttachments <a name="DataOciIntegrationIntegrationInstanceAttachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAttachments;

DataOciIntegrationIntegrationInstanceAttachments.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceConfig <a name="DataOciIntegrationIntegrationInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceConfig;

DataOciIntegrationIntegrationInstanceConfig.builder()
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
    .integrationInstanceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceConfig.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instance#integration_instance_id DataOciIntegrationIntegrationInstance#integration_instance_id}.

---

### DataOciIntegrationIntegrationInstanceCustomEndpoint <a name="DataOciIntegrationIntegrationInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceCustomEndpoint;

DataOciIntegrationIntegrationInstanceCustomEndpoint.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails;

DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails;

DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceIdcsInfo <a name="DataOciIntegrationIntegrationInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceIdcsInfo;

DataOciIntegrationIntegrationInstanceIdcsInfo.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetails <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails;

DataOciIntegrationIntegrationInstanceNetworkEndpointDetails.builder()
    .build();
```


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns;

DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.builder()
    .build();
```


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection;

DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList;

new DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference <a name="DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference;

new DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType">managedType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints">DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints">DataOciIntegrationIntegrationInstanceAlternateCustomEndpoints</a>

---


### DataOciIntegrationIntegrationInstanceAttachmentsList <a name="DataOciIntegrationIntegrationInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAttachmentsList;

new DataOciIntegrationIntegrationInstanceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceAttachmentsOutputReference <a name="DataOciIntegrationIntegrationInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference;

new DataOciIntegrationIntegrationInstanceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments">DataOciIntegrationIntegrationInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit"></a>

```java
public IResolvable getIsImplicit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```java
public java.lang.String getTargetInstanceUrl();
```

- *Type:* java.lang.String

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole"></a>

```java
public java.lang.String getTargetRole();
```

- *Type:* java.lang.String

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```java
public java.lang.String getTargetServiceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceAttachments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceAttachments">DataOciIntegrationIntegrationInstanceAttachments</a>

---


### DataOciIntegrationIntegrationInstanceCustomEndpointList <a name="DataOciIntegrationIntegrationInstanceCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceCustomEndpointList;

new DataOciIntegrationIntegrationInstanceCustomEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference <a name="DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference;

new DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType">managedType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint">DataOciIntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceCustomEndpoint getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceCustomEndpoint">DataOciIntegrationIntegrationInstanceCustomEndpoint</a>

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList;

new DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference;

new DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">timeRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `timeRoleChanged`<sup>Required</sup> <a name="timeRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```java
public java.lang.String getTimeRoleChanged();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList;

new DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference;

new DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">crossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regionalInstanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="crossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList getCrossRegionIntegrationInstanceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regionalInstanceUrl`<sup>Required</sup> <a name="regionalInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```java
public java.lang.String getRegionalInstanceUrl();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails">DataOciIntegrationIntegrationInstanceDisasterRecoveryDetails</a>

---


### DataOciIntegrationIntegrationInstanceIdcsInfoList <a name="DataOciIntegrationIntegrationInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceIdcsInfoList;

new DataOciIntegrationIntegrationInstanceIdcsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference <a name="DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference;

new DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo">DataOciIntegrationIntegrationInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```java
public java.lang.String getIdcsAppDisplayName();
```

- *Type:* java.lang.String

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```java
public java.lang.String getIdcsAppId();
```

- *Type:* java.lang.String

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```java
public java.lang.String getIdcsAppLocationUrl();
```

- *Type:* java.lang.String

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```java
public java.lang.String getIdcsAppName();
```

- *Type:* java.lang.String

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```java
public java.lang.String getInstancePrimaryAudienceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceIdcsInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceIdcsInfo">DataOciIntegrationIntegrationInstanceIdcsInfo</a>

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList;

new DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference;

new DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList;

new DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference <a name="DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference;

new DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails">DataOciIntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowlistedHttpIps`<sup>Required</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedHttpIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowlistedHttpVcns`<sup>Required</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList getAllowlistedHttpVcns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `isIntegrationVcnAllowlisted`<sup>Required</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```java
public IResolvable getIsIntegrationVcnAllowlisted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstanceNetworkEndpointDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstanceNetworkEndpointDetails">DataOciIntegrationIntegrationInstanceNetworkEndpointDetails</a>

---


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList;

new DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get"></a>

```java
public DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference <a name="DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_integration_integration_instance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference;

new DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outboundConnectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outboundConnectionType`<sup>Required</sup> <a name="outboundConnectionType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```java
public java.lang.String getOutboundConnectionType();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```java
public DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstance.DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancePrivateEndpointOutboundConnection</a>

---



