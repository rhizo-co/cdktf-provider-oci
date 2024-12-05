# `dataOciOsubSubscriptionRatecards` Submodule <a name="`dataOciOsubSubscriptionRatecards` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionRatecards <a name="DataOciOsubSubscriptionRatecards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards oci_osub_subscription_ratecards}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecards(Construct Scope, string Id, DataOciOsubSubscriptionRatecardsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig">DataOciOsubSubscriptionRatecardsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig">DataOciOsubSubscriptionRatecardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber">ResetPartNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom">ResetTimeFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo">ResetTimeTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartNumber` <a name="ResetPartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber"></a>

```csharp
private void ResetPartNumber()
```

##### `ResetTimeFrom` <a name="ResetTimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom"></a>

```csharp
private void ResetTimeFrom()
```

##### `ResetTimeTo` <a name="ResetTimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo"></a>

```csharp
private void ResetTimeTo()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion"></a>

```csharp
private void ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionRatecards.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionRatecards.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionRatecards.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionRatecards.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubSubscriptionRatecards to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubSubscriptionRatecards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionRatecards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput">PartNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput">TimeFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput">TimeToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom">TimeFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo">TimeTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter"></a>

```csharp
public DataOciOsubSubscriptionRatecardsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a>

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsList RateCards { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartNumberInput`<sup>Optional</sup> <a name="PartNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput"></a>

```csharp
public string PartNumberInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeFromInput`<sup>Optional</sup> <a name="TimeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput"></a>

```csharp
public string TimeFromInput { get; }
```

- *Type:* string

---

##### `TimeToInput`<sup>Optional</sup> <a name="TimeToInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput"></a>

```csharp
public string TimeToInput { get; }
```

- *Type:* string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput"></a>

```csharp
public string XOneOriginRegionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom"></a>

```csharp
public string TimeFrom { get; }
```

- *Type:* string

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo"></a>

```csharp
public string TimeTo { get; }
```

- *Type:* string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionRatecardsConfig <a name="DataOciOsubSubscriptionRatecardsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsConfig {
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
    string TimeTo = null,
    string XOneOriginRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber">PartNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom">TimeFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo">TimeTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#filter DataOciOsubSubscriptionRatecards#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartNumber`<sup>Optional</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber"></a>

```csharp
public string PartNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}.

---

##### `TimeFrom`<sup>Optional</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom"></a>

```csharp
public string TimeFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}.

---

##### `TimeTo`<sup>Optional</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo"></a>

```csharp
public string TimeTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}.

---

### DataOciOsubSubscriptionRatecardsFilter <a name="DataOciOsubSubscriptionRatecardsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}.

---

### DataOciOsubSubscriptionRatecardsRateCards <a name="DataOciOsubSubscriptionRatecardsRateCards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCards {

};
```


### DataOciOsubSubscriptionRatecardsRateCardsCurrency <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsCurrency {

};
```


### DataOciOsubSubscriptionRatecardsRateCardsProduct <a name="DataOciOsubSubscriptionRatecardsRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsProduct {

};
```


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionRatecardsFilterList <a name="DataOciOsubSubscriptionRatecardsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get"></a>

```csharp
private DataOciOsubSubscriptionRatecardsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubSubscriptionRatecardsFilterOutputReference <a name="DataOciOsubSubscriptionRatecardsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyList <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get"></a>

```csharp
private DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsList <a name="DataOciOsubSubscriptionRatecardsRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get"></a>

```csharp
private DataOciOsubSubscriptionRatecardsRateCardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionRatecardsRateCardsOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```csharp
public string DiscretionaryDiscountPercentage { get; }
```

- *Type:* string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier"></a>

```csharp
public IResolvable IsTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList RateCardTiers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCards InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsProductList <a name="DataOciOsubSubscriptionRatecardsRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get"></a>

```csharp
private DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get"></a>

```csharp
private DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```csharp
public string UpToQuantity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a>

---



