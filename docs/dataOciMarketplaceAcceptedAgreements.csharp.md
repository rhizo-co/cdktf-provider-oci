# `dataOciMarketplaceAcceptedAgreements` Submodule <a name="`dataOciMarketplaceAcceptedAgreements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements oci_marketplace_accepted_agreements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreements(Construct Scope, string Id, DataOciMarketplaceAcceptedAgreementsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig">DataOciMarketplaceAcceptedAgreementsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig">DataOciMarketplaceAcceptedAgreementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId">ResetAcceptedAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId">ResetListingId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAcceptedAgreementId` <a name="ResetAcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId"></a>

```csharp
private void ResetAcceptedAgreementId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListingId` <a name="ResetListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId"></a>

```csharp
private void ResetListingId()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion"></a>

```csharp
private void ResetPackageVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMarketplaceAcceptedAgreements.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMarketplaceAcceptedAgreements.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMarketplaceAcceptedAgreements.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMarketplaceAcceptedAgreements.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMarketplaceAcceptedAgreements to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMarketplaceAcceptedAgreements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceAcceptedAgreements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements">AcceptedAgreements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput">AcceptedAgreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId">AcceptedAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AcceptedAgreements`<sup>Required</sup> <a name="AcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements"></a>

```csharp
public DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList AcceptedAgreements { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter"></a>

```csharp
public DataOciMarketplaceAcceptedAgreementsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a>

---

##### `AcceptedAgreementIdInput`<sup>Optional</sup> <a name="AcceptedAgreementIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput"></a>

```csharp
public string AcceptedAgreementIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `AcceptedAgreementId`<sup>Required</sup> <a name="AcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId"></a>

```csharp
public string AcceptedAgreementId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsAcceptedAgreements {

};
```


### DataOciMarketplaceAcceptedAgreementsConfig <a name="DataOciMarketplaceAcceptedAgreementsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AcceptedAgreementId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string ListingId = null,
    string PackageVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId">AcceptedAgreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}.

---

##### `AcceptedAgreementId`<sup>Optional</sup> <a name="AcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId"></a>

```csharp
public string AcceptedAgreementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#filter DataOciMarketplaceAcceptedAgreements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListingId`<sup>Optional</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}.

---

### DataOciMarketplaceAcceptedAgreementsFilter <a name="DataOciMarketplaceAcceptedAgreementsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get"></a>

```csharp
private DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId">AgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId"></a>

```csharp
public string AgreementId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue"></a>

```csharp
public DataOciMarketplaceAcceptedAgreementsAcceptedAgreements InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a>

---


### DataOciMarketplaceAcceptedAgreementsFilterList <a name="DataOciMarketplaceAcceptedAgreementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get"></a>

```csharp
private DataOciMarketplaceAcceptedAgreementsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMarketplaceAcceptedAgreementsFilterOutputReference <a name="DataOciMarketplaceAcceptedAgreementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMarketplaceAcceptedAgreementsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



