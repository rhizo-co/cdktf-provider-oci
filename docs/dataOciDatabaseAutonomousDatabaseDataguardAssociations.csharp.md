# `dataOciDatabaseAutonomousDatabaseDataguardAssociations` Submodule <a name="`dataOciDatabaseAutonomousDatabaseDataguardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations oci_database_autonomous_database_dataguard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociations(Construct Scope, string Id, DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseDataguardAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseDataguardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseDataguardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseDataguardAssociations">AutonomousDatabaseDataguardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDatabaseDataguardAssociations`<sup>Required</sup> <a name="AutonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseDataguardAssociations"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList AutonomousDatabaseDataguardAssociations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList</a>

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations {

};
```


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousDatabaseId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#filter DataOciDatabaseAutonomousDatabaseDataguardAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#name DataOciDatabaseAutonomousDatabaseDataguardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#values DataOciDatabaseAutonomousDatabaseDataguardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#regex DataOciDatabaseAutonomousDatabaseDataguardAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#name DataOciDatabaseAutonomousDatabaseDataguardAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#values DataOciDatabaseAutonomousDatabaseDataguardAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#regex DataOciDatabaseAutonomousDatabaseDataguardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyLag">ApplyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyRate">ApplyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseId">PeerAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseLifeCycleState">PeerAutonomousDatabaseLifeCycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerRole">PeerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged">TimeLastRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastSynced">TimeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.transportLag">TransportLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyLag"></a>

```csharp
public string ApplyLag { get; }
```

- *Type:* string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyRate"></a>

```csharp
public string ApplyRate { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutomaticFailoverEnabled`<sup>Required</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled"></a>

```csharp
public IResolvable IsAutomaticFailoverEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PeerAutonomousDatabaseId`<sup>Required</sup> <a name="PeerAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseId"></a>

```csharp
public string PeerAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `PeerAutonomousDatabaseLifeCycleState`<sup>Required</sup> <a name="PeerAutonomousDatabaseLifeCycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseLifeCycleState"></a>

```csharp
public string PeerAutonomousDatabaseLifeCycleState { get; }
```

- *Type:* string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerRole"></a>

```csharp
public string PeerRole { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastRoleChanged`<sup>Required</sup> <a name="TimeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged"></a>

```csharp
public string TimeLastRoleChanged { get; }
```

- *Type:* string

---

##### `TimeLastSynced`<sup>Required</sup> <a name="TimeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastSynced"></a>

```csharp
public string TimeLastSynced { get; }
```

- *Type:* string

---

##### `TransportLag`<sup>Required</sup> <a name="TransportLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.transportLag"></a>

```csharp
public string TransportLag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations</a>

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



