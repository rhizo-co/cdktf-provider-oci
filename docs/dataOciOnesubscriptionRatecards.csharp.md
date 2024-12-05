# `dataOciOnesubscriptionRatecards` Submodule <a name="`dataOciOnesubscriptionRatecards` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionRatecards <a name="DataOciOnesubscriptionRatecards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards oci_onesubscription_ratecards}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecards(Construct Scope, string Id, DataOciOnesubscriptionRatecardsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig">DataOciOnesubscriptionRatecardsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig">DataOciOnesubscriptionRatecardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetPartNumber">ResetPartNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetTimeFrom">ResetTimeFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetTimeTo">ResetTimeTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartNumber` <a name="ResetPartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetPartNumber"></a>

```csharp
private void ResetPartNumber()
```

##### `ResetTimeFrom` <a name="ResetTimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetTimeFrom"></a>

```csharp
private void ResetTimeFrom()
```

##### `ResetTimeTo` <a name="ResetTimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.resetTimeTo"></a>

```csharp
private void ResetTimeTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionRatecards resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionRatecards.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionRatecards.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionRatecards.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionRatecards.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOnesubscriptionRatecards resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionRatecards to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionRatecards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionRatecards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList">DataOciOnesubscriptionRatecardsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList">DataOciOnesubscriptionRatecardsRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.partNumberInput">PartNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeFromInput">TimeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeToInput">TimeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeFrom">TimeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeTo">TimeTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.filter"></a>

```csharp
public DataOciOnesubscriptionRatecardsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList">DataOciOnesubscriptionRatecardsFilterList</a>

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.rateCards"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsList RateCards { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList">DataOciOnesubscriptionRatecardsRateCardsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartNumberInput`<sup>Optional</sup> <a name="PartNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.partNumberInput"></a>

```csharp
public string PartNumberInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeFromInput`<sup>Optional</sup> <a name="TimeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeFromInput"></a>

```csharp
public string TimeFromInput { get; }
```

- *Type:* string

---

##### `TimeToInput`<sup>Optional</sup> <a name="TimeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeToInput"></a>

```csharp
public string TimeToInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeFrom"></a>

```csharp
public string TimeFrom { get; }
```

- *Type:* string

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.timeTo"></a>

```csharp
public string TimeTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecards.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionRatecardsConfig <a name="DataOciOnesubscriptionRatecardsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SubscriptionId,
    object Filter = null,
    string Id = null,
    string PartNumber = null,
    string TimeFrom = null,
    string TimeTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#compartment_id DataOciOnesubscriptionRatecards#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#subscription_id DataOciOnesubscriptionRatecards#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#id DataOciOnesubscriptionRatecards#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.partNumber">PartNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#part_number DataOciOnesubscriptionRatecards#part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.timeFrom">TimeFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_from DataOciOnesubscriptionRatecards#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.timeTo">TimeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_to DataOciOnesubscriptionRatecards#time_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#compartment_id DataOciOnesubscriptionRatecards#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#subscription_id DataOciOnesubscriptionRatecards#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#filter DataOciOnesubscriptionRatecards#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#id DataOciOnesubscriptionRatecards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartNumber`<sup>Optional</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.partNumber"></a>

```csharp
public string PartNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#part_number DataOciOnesubscriptionRatecards#part_number}.

---

##### `TimeFrom`<sup>Optional</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.timeFrom"></a>

```csharp
public string TimeFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_from DataOciOnesubscriptionRatecards#time_from}.

---

##### `TimeTo`<sup>Optional</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsConfig.property.timeTo"></a>

```csharp
public string TimeTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#time_to DataOciOnesubscriptionRatecards#time_to}.

---

### DataOciOnesubscriptionRatecardsFilter <a name="DataOciOnesubscriptionRatecardsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#name DataOciOnesubscriptionRatecards#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#values DataOciOnesubscriptionRatecards#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#regex DataOciOnesubscriptionRatecards#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#name DataOciOnesubscriptionRatecards#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#values DataOciOnesubscriptionRatecards#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_ratecards#regex DataOciOnesubscriptionRatecards#regex}.

---

### DataOciOnesubscriptionRatecardsRateCards <a name="DataOciOnesubscriptionRatecardsRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCards {

};
```


### DataOciOnesubscriptionRatecardsRateCardsCurrency <a name="DataOciOnesubscriptionRatecardsRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsCurrency {

};
```


### DataOciOnesubscriptionRatecardsRateCardsProduct <a name="DataOciOnesubscriptionRatecardsRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsProduct {

};
```


### DataOciOnesubscriptionRatecardsRateCardsRateCardTiers <a name="DataOciOnesubscriptionRatecardsRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsRateCardTiers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionRatecardsFilterList <a name="DataOciOnesubscriptionRatecardsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.get"></a>

```csharp
private DataOciOnesubscriptionRatecardsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionRatecardsFilterOutputReference <a name="DataOciOnesubscriptionRatecardsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionRatecardsRateCardsCurrencyList <a name="DataOciOnesubscriptionRatecardsRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.get"></a>

```csharp
private DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrency">DataOciOnesubscriptionRatecardsRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrency">DataOciOnesubscriptionRatecardsRateCardsCurrency</a>

---


### DataOciOnesubscriptionRatecardsRateCardsList <a name="DataOciOnesubscriptionRatecardsRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.get"></a>

```csharp
private DataOciOnesubscriptionRatecardsRateCardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionRatecardsRateCardsOutputReference <a name="DataOciOnesubscriptionRatecardsRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList">DataOciOnesubscriptionRatecardsRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList">DataOciOnesubscriptionRatecardsRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList">DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCards">DataOciOnesubscriptionRatecardsRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.currency"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsCurrencyList">DataOciOnesubscriptionRatecardsRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```csharp
public string DiscretionaryDiscountPercentage { get; }
```

- *Type:* string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.isTier"></a>

```csharp
public IResolvable IsTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.product"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList">DataOciOnesubscriptionRatecardsRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList RateCardTiers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList">DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList</a>

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.subscribedServiceId"></a>

```csharp
public string SubscribedServiceId { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCards InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCards">DataOciOnesubscriptionRatecardsRateCards</a>

---


### DataOciOnesubscriptionRatecardsRateCardsProductList <a name="DataOciOnesubscriptionRatecardsRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.get"></a>

```csharp
private DataOciOnesubscriptionRatecardsRateCardsProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionRatecardsRateCardsProductOutputReference <a name="DataOciOnesubscriptionRatecardsRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProduct">DataOciOnesubscriptionRatecardsRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsProduct">DataOciOnesubscriptionRatecardsRateCardsProduct</a>

---


### DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList <a name="DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.get"></a>

```csharp
private DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiers">DataOciOnesubscriptionRatecardsRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```csharp
public string UpToQuantity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionRatecardsRateCardsRateCardTiers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionRatecards.DataOciOnesubscriptionRatecardsRateCardsRateCardTiers">DataOciOnesubscriptionRatecardsRateCardsRateCardTiers</a>

---



