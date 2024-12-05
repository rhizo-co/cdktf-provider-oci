# `dataOciFunctionsPbfListingTriggers` Submodule <a name="`dataOciFunctionsPbfListingTriggers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingTriggersA <a name="DataOciFunctionsPbfListingTriggersA" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers oci_functions_pbf_listing_triggers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersA(Construct Scope, string Id, DataOciFunctionsPbfListingTriggersAConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig">DataOciFunctionsPbfListingTriggersAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig">DataOciFunctionsPbfListingTriggersAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingTriggersA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingTriggersA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingTriggersA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingTriggersA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingTriggersA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingTriggersA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFunctionsPbfListingTriggersA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFunctionsPbfListingTriggersA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingTriggersA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList">DataOciFunctionsPbfListingTriggersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.triggersCollection">TriggersCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList">DataOciFunctionsPbfListingTriggersTriggersCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.filter"></a>

```csharp
public DataOciFunctionsPbfListingTriggersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList">DataOciFunctionsPbfListingTriggersFilterList</a>

---

##### `TriggersCollection`<sup>Required</sup> <a name="TriggersCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.triggersCollection"></a>

```csharp
public DataOciFunctionsPbfListingTriggersTriggersCollectionList TriggersCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList">DataOciFunctionsPbfListingTriggersTriggersCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingTriggersAConfig <a name="DataOciFunctionsPbfListingTriggersAConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#id DataOciFunctionsPbfListingTriggersA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#name DataOciFunctionsPbfListingTriggersA#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#filter DataOciFunctionsPbfListingTriggersA#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#id DataOciFunctionsPbfListingTriggersA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersAConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#name DataOciFunctionsPbfListingTriggersA#name}.

---

### DataOciFunctionsPbfListingTriggersFilter <a name="DataOciFunctionsPbfListingTriggersFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#name DataOciFunctionsPbfListingTriggersA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#values DataOciFunctionsPbfListingTriggersA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#regex DataOciFunctionsPbfListingTriggersA#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#name DataOciFunctionsPbfListingTriggersA#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#values DataOciFunctionsPbfListingTriggersA#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_triggers#regex DataOciFunctionsPbfListingTriggersA#regex}.

---

### DataOciFunctionsPbfListingTriggersTriggersCollection <a name="DataOciFunctionsPbfListingTriggersTriggersCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollection {

};
```


### DataOciFunctionsPbfListingTriggersTriggersCollectionItems <a name="DataOciFunctionsPbfListingTriggersTriggersCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingTriggersFilterList <a name="DataOciFunctionsPbfListingTriggersFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.get"></a>

```csharp
private DataOciFunctionsPbfListingTriggersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFunctionsPbfListingTriggersFilterOutputReference <a name="DataOciFunctionsPbfListingTriggersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList <a name="DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.get"></a>

```csharp
private DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference <a name="DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItems">DataOciFunctionsPbfListingTriggersTriggersCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingTriggersTriggersCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItems">DataOciFunctionsPbfListingTriggersTriggersCollectionItems</a>

---


### DataOciFunctionsPbfListingTriggersTriggersCollectionList <a name="DataOciFunctionsPbfListingTriggersTriggersCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.get"></a>

```csharp
private DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference <a name="DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList">DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollection">DataOciFunctionsPbfListingTriggersTriggersCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.items"></a>

```csharp
public DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList">DataOciFunctionsPbfListingTriggersTriggersCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingTriggersTriggersCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingTriggers.DataOciFunctionsPbfListingTriggersTriggersCollection">DataOciFunctionsPbfListingTriggersTriggersCollection</a>

---



