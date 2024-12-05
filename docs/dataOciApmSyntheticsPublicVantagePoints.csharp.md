# `dataOciApmSyntheticsPublicVantagePoints` Submodule <a name="`dataOciApmSyntheticsPublicVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsPublicVantagePoints <a name="DataOciApmSyntheticsPublicVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points oci_apm_synthetics_public_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePoints(Construct Scope, string Id, DataOciApmSyntheticsPublicVantagePointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig">DataOciApmSyntheticsPublicVantagePointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig">DataOciApmSyntheticsPublicVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsPublicVantagePoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsPublicVantagePoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsPublicVantagePoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsPublicVantagePoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsPublicVantagePoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsPublicVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsPublicVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection">PublicVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a>

---

##### `PublicVantagePointCollection`<sup>Required</sup> <a name="PublicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList PublicVantagePointCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsPublicVantagePointsConfig <a name="DataOciApmSyntheticsPublicVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsConfig {
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
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#filter DataOciApmSyntheticsPublicVantagePoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

### DataOciApmSyntheticsPublicVantagePointsFilter <a name="DataOciApmSyntheticsPublicVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}.

---

### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection {

};
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems {

};
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsPublicVantagePointsFilterList <a name="DataOciApmSyntheticsPublicVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get"></a>

```csharp
private DataOciApmSyntheticsPublicVantagePointsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmSyntheticsPublicVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get"></a>

```csharp
private DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode">AdminDivCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName">CityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName">CountryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude">Latitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude">Longitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminDivCode`<sup>Required</sup> <a name="AdminDivCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode"></a>

```csharp
public string AdminDivCode { get; }
```

- *Type:* string

---

##### `CityName`<sup>Required</sup> <a name="CityName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName"></a>

```csharp
public string CityName { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `CountryName`<sup>Required</sup> <a name="CountryName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName"></a>

```csharp
public string CountryName { get; }
```

- *Type:* string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude"></a>

```csharp
public double Latitude { get; }
```

- *Type:* double

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude"></a>

```csharp
public double Longitude { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get"></a>

```csharp
private DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo">Geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList Geo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get"></a>

```csharp
private DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a>

---



