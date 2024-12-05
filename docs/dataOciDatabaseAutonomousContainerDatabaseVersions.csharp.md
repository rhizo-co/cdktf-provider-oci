# `dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions oci_database_autonomous_container_database_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersions(Construct Scope, string Id, DataOciDatabaseAutonomousContainerDatabaseVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig">DataOciDatabaseAutonomousContainerDatabaseVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig">DataOciDatabaseAutonomousContainerDatabaseVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousContainerDatabaseVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions">AutonomousContainerDatabaseVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput">ServiceComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent">ServiceComponent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseVersions`<sup>Required</sup> <a name="AutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList AutonomousContainerDatabaseVersions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceComponentInput`<sup>Optional</sup> <a name="ServiceComponentInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput"></a>

```csharp
public string ServiceComponentInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceComponent`<sup>Required</sup> <a name="ServiceComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent"></a>

```csharp
public string ServiceComponent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions {

};
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps {

};
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ServiceComponent,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent">ServiceComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}.

---

##### `ServiceComponent`<sup>Required</sup> <a name="ServiceComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent"></a>

```csharp
public string ServiceComponent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#filter DataOciDatabaseAutonomousContainerDatabaseVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseVersionsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get"></a>

```csharp
private DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps">SupportedApps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `SupportedApps`<sup>Required</sup> <a name="SupportedApps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList SupportedApps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get"></a>

```csharp
private DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport">EndOfSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified">IsCertified</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName">SupportedAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndOfSupport`<sup>Required</sup> <a name="EndOfSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport"></a>

```csharp
public string EndOfSupport { get; }
```

- *Type:* string

---

##### `IsCertified`<sup>Required</sup> <a name="IsCertified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified"></a>

```csharp
public IResolvable IsCertified { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `SupportedAppName`<sup>Required</sup> <a name="SupportedAppName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName"></a>

```csharp
public string SupportedAppName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



