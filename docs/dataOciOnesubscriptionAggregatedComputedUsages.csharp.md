# `dataOciOnesubscriptionAggregatedComputedUsages` Submodule <a name="`dataOciOnesubscriptionAggregatedComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages oci_onesubscription_aggregated_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsages(Construct Scope, string Id, DataOciOnesubscriptionAggregatedComputedUsagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig">DataOciOnesubscriptionAggregatedComputedUsagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig">DataOciOnesubscriptionAggregatedComputedUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping">ResetGrouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct">ResetParentProduct</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGrouping` <a name="ResetGrouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping"></a>

```csharp
private void ResetGrouping()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParentProduct` <a name="ResetParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct"></a>

```csharp
private void ResetParentProduct()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionAggregatedComputedUsages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionAggregatedComputedUsages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionAggregatedComputedUsages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionAggregatedComputedUsages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionAggregatedComputedUsages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionAggregatedComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionAggregatedComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages">AggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput">GroupingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput">ParentProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput">TimeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput">TimeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping">Grouping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct">ParentProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom">TimeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo">TimeTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AggregatedComputedUsages`<sup>Required</sup> <a name="AggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList AggregatedComputedUsages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupingInput`<sup>Optional</sup> <a name="GroupingInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput"></a>

```csharp
public string GroupingInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentProductInput`<sup>Optional</sup> <a name="ParentProductInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput"></a>

```csharp
public string ParentProductInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeFromInput`<sup>Optional</sup> <a name="TimeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput"></a>

```csharp
public string TimeFromInput { get; }
```

- *Type:* string

---

##### `TimeToInput`<sup>Optional</sup> <a name="TimeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput"></a>

```csharp
public string TimeToInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping"></a>

```csharp
public string Grouping { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentProduct`<sup>Required</sup> <a name="ParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct"></a>

```csharp
public string ParentProduct { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom"></a>

```csharp
public string TimeFrom { get; }
```

- *Type:* string

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo"></a>

```csharp
public string TimeTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages {

};
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages {

};
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct {

};
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct {

};
```


### DataOciOnesubscriptionAggregatedComputedUsagesConfig <a name="DataOciOnesubscriptionAggregatedComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SubscriptionId,
    string TimeFrom,
    string TimeTo,
    object Filter = null,
    string Grouping = null,
    string Id = null,
    string ParentProduct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom">TimeFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo">TimeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping">Grouping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct">ParentProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}.

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom"></a>

```csharp
public string TimeFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}.

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo"></a>

```csharp
public string TimeTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#filter DataOciOnesubscriptionAggregatedComputedUsages#filter}

---

##### `Grouping`<sup>Optional</sup> <a name="Grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping"></a>

```csharp
public string Grouping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentProduct`<sup>Optional</sup> <a name="ParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct"></a>

```csharp
public string ParentProduct { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}.

---

### DataOciOnesubscriptionAggregatedComputedUsagesFilter <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```csharp
private DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost">Cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded">CostUnrounded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter">DataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn">TimeMeteredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cost`<sup>Required</sup> <a name="Cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost"></a>

```csharp
public string Cost { get; }
```

- *Type:* string

---

##### `CostUnrounded`<sup>Required</sup> <a name="CostUnrounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded"></a>

```csharp
public string CostUnrounded { get; }
```

- *Type:* string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter"></a>

```csharp
public string DataCenter { get; }
```

- *Type:* string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a>

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `TimeMeteredOn`<sup>Required</sup> <a name="TimeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn"></a>

```csharp
public string TimeMeteredOn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get"></a>

```csharp
private DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```csharp
public string ProvisioningGroup { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```csharp
private DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages">AggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct">ParentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId">ParentSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber">PlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel">PricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId">RateCardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatedComputedUsages`<sup>Required</sup> <a name="AggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList AggregatedComputedUsages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `ParentProduct`<sup>Required</sup> <a name="ParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList ParentProduct { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a>

---

##### `ParentSubscribedServiceId`<sup>Required</sup> <a name="ParentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```csharp
public string ParentSubscribedServiceId { get; }
```

- *Type:* string

---

##### `PlanNumber`<sup>Required</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber"></a>

```csharp
public string PlanNumber { get; }
```

- *Type:* string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel"></a>

```csharp
public string PricingModel { get; }
```

- *Type:* string

---

##### `RateCardId`<sup>Required</sup> <a name="RateCardId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId"></a>

```csharp
public string RateCardId { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get"></a>

```csharp
private DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```csharp
public string ProvisioningGroup { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterList <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get"></a>

```csharp
private DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



