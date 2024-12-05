# `dataOciDatabaseAutonomousExadataInfrastructureShapes` Submodule <a name="`dataOciDatabaseAutonomousExadataInfrastructureShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousExadataInfrastructureShapes <a name="DataOciDatabaseAutonomousExadataInfrastructureShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes oci_database_autonomous_exadata_infrastructure_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapes(Construct Scope, string Id, DataOciDatabaseAutonomousExadataInfrastructureShapesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig">DataOciDatabaseAutonomousExadataInfrastructureShapesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig">DataOciDatabaseAutonomousExadataInfrastructureShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructureShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructureShapes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructureShapes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructureShapes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousExadataInfrastructureShapes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructureShapes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructureShapes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousExadataInfrastructureShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructureShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.autonomousExadataInfrastructureShapes">AutonomousExadataInfrastructureShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList">DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList">DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousExadataInfrastructureShapes`<sup>Required</sup> <a name="AutonomousExadataInfrastructureShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.autonomousExadataInfrastructureShapes"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList AutonomousExadataInfrastructureShapes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList">DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList">DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes {

};
```


### DataOciDatabaseAutonomousExadataInfrastructureShapesConfig <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#availability_domain DataOciDatabaseAutonomousExadataInfrastructureShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#compartment_id DataOciDatabaseAutonomousExadataInfrastructureShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#id DataOciDatabaseAutonomousExadataInfrastructureShapes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#availability_domain DataOciDatabaseAutonomousExadataInfrastructureShapes#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#compartment_id DataOciDatabaseAutonomousExadataInfrastructureShapes#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#filter DataOciDatabaseAutonomousExadataInfrastructureShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#id DataOciDatabaseAutonomousExadataInfrastructureShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousExadataInfrastructureShapesFilter <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#name DataOciDatabaseAutonomousExadataInfrastructureShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#values DataOciDatabaseAutonomousExadataInfrastructureShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#regex DataOciDatabaseAutonomousExadataInfrastructureShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#name DataOciDatabaseAutonomousExadataInfrastructureShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#values DataOciDatabaseAutonomousExadataInfrastructureShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructure_shapes#regex DataOciDatabaseAutonomousExadataInfrastructureShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.availableCoreCount">AvailableCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.coreCountIncrement">CoreCountIncrement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.maximumNodeCount">MaximumNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.minimumCoreCount">MinimumCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.minimumNodeCount">MinimumNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes">DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableCoreCount`<sup>Required</sup> <a name="AvailableCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.availableCoreCount"></a>

```csharp
public double AvailableCoreCount { get; }
```

- *Type:* double

---

##### `CoreCountIncrement`<sup>Required</sup> <a name="CoreCountIncrement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.coreCountIncrement"></a>

```csharp
public double CoreCountIncrement { get; }
```

- *Type:* double

---

##### `MaximumNodeCount`<sup>Required</sup> <a name="MaximumNodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.maximumNodeCount"></a>

```csharp
public double MaximumNodeCount { get; }
```

- *Type:* double

---

##### `MinimumCoreCount`<sup>Required</sup> <a name="MinimumCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.minimumCoreCount"></a>

```csharp
public double MinimumCoreCount { get; }
```

- *Type:* double

---

##### `MinimumNodeCount`<sup>Required</sup> <a name="MinimumNodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.minimumNodeCount"></a>

```csharp
public double MinimumNodeCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes">DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes</a>

---


### DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructureShapes.DataOciDatabaseAutonomousExadataInfrastructureShapesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



