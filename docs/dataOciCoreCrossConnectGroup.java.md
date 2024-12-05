# `dataOciCoreCrossConnectGroup` Submodule <a name="`dataOciCoreCrossConnectGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnectGroup <a name="DataOciCoreCrossConnectGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group oci_core_cross_connect_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroup;

DataOciCoreCrossConnectGroup.Builder.create(Construct scope, java.lang.String id)
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
    .crossConnectGroupId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.crossConnectGroupId">crossConnectGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.crossConnectGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroup;

DataOciCoreCrossConnectGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroup;

DataOciCoreCrossConnectGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroup;

DataOciCoreCrossConnectGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroup;

DataOciCoreCrossConnectGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreCrossConnectGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreCrossConnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreCrossConnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreCrossConnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.customerReferenceName">customerReferenceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.macsecProperties">macsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList">DataOciCoreCrossConnectGroupMacsecPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociLogicalDeviceName">ociLogicalDeviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociPhysicalDeviceName">ociPhysicalDeviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupIdInput">crossConnectGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `customerReferenceName`<sup>Required</sup> <a name="customerReferenceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.customerReferenceName"></a>

```java
public java.lang.String getCustomerReferenceName();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `macsecProperties`<sup>Required</sup> <a name="macsecProperties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.macsecProperties"></a>

```java
public DataOciCoreCrossConnectGroupMacsecPropertiesList getMacsecProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList">DataOciCoreCrossConnectGroupMacsecPropertiesList</a>

---

##### `ociLogicalDeviceName`<sup>Required</sup> <a name="ociLogicalDeviceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociLogicalDeviceName"></a>

```java
public java.lang.String getOciLogicalDeviceName();
```

- *Type:* java.lang.String

---

##### `ociPhysicalDeviceName`<sup>Required</sup> <a name="ociPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociPhysicalDeviceName"></a>

```java
public java.lang.String getOciPhysicalDeviceName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `crossConnectGroupIdInput`<sup>Optional</sup> <a name="crossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupIdInput"></a>

```java
public java.lang.String getCrossConnectGroupIdInput();
```

- *Type:* java.lang.String

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupId"></a>

```java
public java.lang.String getCrossConnectGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectGroupConfig <a name="DataOciCoreCrossConnectGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupConfig;

DataOciCoreCrossConnectGroupConfig.builder()
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
    .crossConnectGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.crossConnectGroupId"></a>

```java
public java.lang.String getCrossConnectGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}.

---

### DataOciCoreCrossConnectGroupMacsecProperties <a name="DataOciCoreCrossConnectGroupMacsecProperties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecProperties;

DataOciCoreCrossConnectGroupMacsecProperties.builder()
    .build();
```


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey;

DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCrossConnectGroupMacsecPropertiesList <a name="DataOciCoreCrossConnectGroupMacsecPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecPropertiesList;

new DataOciCoreCrossConnectGroupMacsecPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get"></a>

```java
public DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference <a name="DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference;

new DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher">encryptionCipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">isUnprotectedTrafficAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey">primaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties">DataOciCoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionCipher`<sup>Required</sup> <a name="encryptionCipher" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```java
public java.lang.String getEncryptionCipher();
```

- *Type:* java.lang.String

---

##### `isUnprotectedTrafficAllowed`<sup>Required</sup> <a name="isUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```java
public IResolvable getIsUnprotectedTrafficAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey"></a>

```java
public DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList getPrimaryKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue"></a>

```java
public DataOciCoreCrossConnectGroupMacsecProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties">DataOciCoreCrossConnectGroupMacsecProperties</a>

---


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList;

new DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get"></a>

```java
public DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cross_connect_group.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference;

new DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivityAssociationKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivityAssociationKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivityAssociationNameSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivityAssociationNameSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivityAssociationKeySecretId`<sup>Required</sup> <a name="connectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```java
public java.lang.String getConnectivityAssociationKeySecretId();
```

- *Type:* java.lang.String

---

##### `connectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="connectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```java
public java.lang.String getConnectivityAssociationKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `connectivityAssociationNameSecretId`<sup>Required</sup> <a name="connectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```java
public java.lang.String getConnectivityAssociationNameSecretId();
```

- *Type:* java.lang.String

---

##### `connectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="connectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```java
public java.lang.String getConnectivityAssociationNameSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```java
public DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---



