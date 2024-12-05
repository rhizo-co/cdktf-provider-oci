# `dataOciApmSyntheticsDedicatedVantagePoints` Submodule <a name="`dataOciApmSyntheticsDedicatedVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsDedicatedVantagePoints <a name="DataOciApmSyntheticsDedicatedVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points oci_apm_synthetics_dedicated_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePoints(Construct Scope, string Id, DataOciApmSyntheticsDedicatedVantagePointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsDedicatedVantagePoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsDedicatedVantagePoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsDedicatedVantagePoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsDedicatedVantagePoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsDedicatedVantagePoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsDedicatedVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsDedicatedVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection">DedicatedVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DedicatedVantagePointCollection`<sup>Required</sup> <a name="DedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList DedicatedVantagePointCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsDedicatedVantagePointsConfig <a name="DataOciApmSyntheticsDedicatedVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string Name = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#filter DataOciApmSyntheticsDedicatedVantagePoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}.

---

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection {

};
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems {

};
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails {

};
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap {

};
```


### DataOciApmSyntheticsDedicatedVantagePointsFilter <a name="DataOciApmSyntheticsDedicatedVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId">DvpStackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType">DvpStackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId">DvpStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion">DvpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DvpStackId`<sup>Required</sup> <a name="DvpStackId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId"></a>

```csharp
public string DvpStackId { get; }
```

- *Type:* string

---

##### `DvpStackType`<sup>Required</sup> <a name="DvpStackType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType"></a>

```csharp
public string DvpStackType { get; }
```

- *Type:* string

---

##### `DvpStreamId`<sup>Required</sup> <a name="DvpStreamId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```csharp
public string DvpStreamId { get; }
```

- *Type:* string

---

##### `DvpVersion`<sup>Required</sup> <a name="DvpVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion"></a>

```csharp
public string DvpVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get"></a>

```csharp
private DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get"></a>

```csharp
private DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled">Disabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled">Enabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid">Invalid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total">Total</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled"></a>

```csharp
public double Disabled { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled"></a>

```csharp
public double Enabled { get; }
```

- *Type:* double

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid"></a>

```csharp
public double Invalid { get; }
```

- *Type:* double

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total"></a>

```csharp
public double Total { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails">DvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap">MonitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DvpStackDetails`<sup>Required</sup> <a name="DvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList DvpStackDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonitorStatusCountMap`<sup>Required</sup> <a name="MonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList MonitorStatusCountMap { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get"></a>

```csharp
private DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterList <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get"></a>

```csharp
private DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



