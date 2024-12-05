# `dataOciMeteringComputationUsageCarbonEmissionsQuery` Submodule <a name="`dataOciMeteringComputationUsageCarbonEmissionsQuery` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQuery <a name="DataOciMeteringComputationUsageCarbonEmissionsQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query oci_metering_computation_usage_carbon_emissions_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQuery(Construct Scope, string Id, DataOciMeteringComputationUsageCarbonEmissionsQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig">DataOciMeteringComputationUsageCarbonEmissionsQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig">DataOciMeteringComputationUsageCarbonEmissionsQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsQuery.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationUsageCarbonEmissionsQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationUsageCarbonEmissionsQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationUsageCarbonEmissionsQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageCarbonEmissionsQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition">QueryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.usageCarbonEmissionsQueryIdInput">UsageCarbonEmissionsQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.usageCarbonEmissionsQueryId">UsageCarbonEmissionsQueryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueryDefinition`<sup>Required</sup> <a name="QueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList QueryDefinition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList</a>

---

##### `UsageCarbonEmissionsQueryIdInput`<sup>Optional</sup> <a name="UsageCarbonEmissionsQueryIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.usageCarbonEmissionsQueryIdInput"></a>

```csharp
public string UsageCarbonEmissionsQueryIdInput { get; }
```

- *Type:* string

---

##### `UsageCarbonEmissionsQueryId`<sup>Required</sup> <a name="UsageCarbonEmissionsQueryId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.usageCarbonEmissionsQueryId"></a>

```csharp
public string UsageCarbonEmissionsQueryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQueryConfig <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UsageCarbonEmissionsQueryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.usageCarbonEmissionsQueryId">UsageCarbonEmissionsQueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_id DataOciMeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UsageCarbonEmissionsQueryId`<sup>Required</sup> <a name="UsageCarbonEmissionsQueryId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryConfig.property.usageCarbonEmissionsQueryId"></a>

```csharp
public string UsageCarbonEmissionsQueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_id DataOciMeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_id}.

---

### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition {

};
```


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi {

};
```


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery {

};
```


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.get"></a>

```csharp
private DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">Graph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">IsCumulativeGraph</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Graph`<sup>Required</sup> <a name="Graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```csharp
public string Graph { get; }
```

- *Type:* string

---

##### `IsCumulativeGraph`<sup>Required</sup> <a name="IsCumulativeGraph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```csharp
public IResolvable IsCumulativeGraph { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.get"></a>

```csharp
private DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi">CostAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery">ReportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostAnalysisUi`<sup>Required</sup> <a name="CostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList CostAnalysisUi { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ReportQuery`<sup>Required</sup> <a name="ReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList ReportQuery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```csharp
private DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.get"></a>

```csharp
private DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">DateRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">GroupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter">UsageCarbonEmissionsQueryFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentDepth`<sup>Required</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; }
```

- *Type:* double

---

##### `DateRangeName`<sup>Required</sup> <a name="DateRangeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```csharp
public string DateRangeName { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `GroupByTag`<sup>Required</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList GroupByTag { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `IsAggregateByTime`<sup>Required</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```csharp
public IResolvable IsAggregateByTime { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `UsageCarbonEmissionsQueryFilter`<sup>Required</sup> <a name="UsageCarbonEmissionsQueryFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter"></a>

```csharp
public string UsageCarbonEmissionsQueryFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQuery.DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---



