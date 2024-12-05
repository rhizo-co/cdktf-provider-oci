# `dataOciDatabaseManagementExternalExadataInfrastructures` Submodule <a name="`dataOciDatabaseManagementExternalExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructures <a name="DataOciDatabaseManagementExternalExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures oci_database_management_external_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructures(Construct Scope, string Id, DataOciDatabaseManagementExternalExadataInfrastructuresConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataInfrastructures.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataInfrastructures.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataInfrastructures.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalExadataInfrastructures.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataInfrastructures to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection">ExternalExadataInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalExadataInfrastructureCollection`<sup>Required</sup> <a name="ExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList ExternalExadataInfrastructureCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresConfig <a name="DataOciDatabaseManagementExternalExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#filter DataOciDatabaseManagementExternalExadataInfrastructures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection {

};
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems {

};
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems {

};
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid {

};
```


### DataOciDatabaseManagementExternalExadataInfrastructuresFilter <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments">DatabaseCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems">DatabaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds">DbSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey">DiscoveryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize">RackSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid">StorageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames">StorageServerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseCompartments`<sup>Required</sup> <a name="DatabaseCompartments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments"></a>

```csharp
public string[] DatabaseCompartments { get; }
```

- *Type:* string[]

---

##### `DatabaseSystems`<sup>Required</sup> <a name="DatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList DatabaseSystems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a>

---

##### `DbSystemIds`<sup>Required</sup> <a name="DbSystemIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds"></a>

```csharp
public string[] DbSystemIds { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiscoveryKey`<sup>Required</sup> <a name="DiscoveryKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey"></a>

```csharp
public string DiscoveryKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RackSize`<sup>Required</sup> <a name="RackSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize"></a>

```csharp
public string RackSize { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageGrid`<sup>Required</sup> <a name="StorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList StorageGrid { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a>

---

##### `StorageServerNames`<sup>Required</sup> <a name="StorageServerNames" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames"></a>

```csharp
public string[] StorageServerNames { get; }
```

- *Type:* string[]

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount">ServerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails"></a>

```csharp
public StringMap AdditionalDetails { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ServerCount`<sup>Required</sup> <a name="ServerCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount"></a>

```csharp
public double ServerCount { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get"></a>

```csharp
private DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



