# `dataOciWaasWaasPolicies` Submodule <a name="`dataOciWaasWaasPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicies <a name="DataOciWaasWaasPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies oci_waas_waas_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicies(Construct Scope, string Id, DataOciWaasWaasPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig">DataOciWaasWaasPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig">DataOciWaasWaasPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetDisplayNames">ResetDisplayNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetStates">ResetStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayNames` <a name="ResetDisplayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetDisplayNames"></a>

```csharp
private void ResetDisplayNames()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIds` <a name="ResetIds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetIds"></a>

```csharp
private void ResetIds()
```

##### `ResetStates` <a name="ResetStates" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetStates"></a>

```csharp
private void ResetStates()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciWaasWaasPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaasWaasPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaasWaasPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList">DataOciWaasWaasPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.waasPolicies">WaasPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList">DataOciWaasWaasPoliciesWaasPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNamesInput">DisplayNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.statesInput">StatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNames">DisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.states">States</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filter"></a>

```csharp
public DataOciWaasWaasPoliciesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList">DataOciWaasWaasPoliciesFilterList</a>

---

##### `WaasPolicies`<sup>Required</sup> <a name="WaasPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.waasPolicies"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesList WaasPolicies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList">DataOciWaasWaasPoliciesWaasPoliciesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNamesInput`<sup>Optional</sup> <a name="DisplayNamesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNamesInput"></a>

```csharp
public string[] DisplayNamesInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `StatesInput`<sup>Optional</sup> <a name="StatesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.statesInput"></a>

```csharp
public string[] StatesInput { get; }
```

- *Type:* string[]

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayNames`<sup>Required</sup> <a name="DisplayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNames"></a>

```csharp
public string[] DisplayNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `States`<sup>Required</sup> <a name="States" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.states"></a>

```csharp
public string[] States { get; }
```

- *Type:* string[]

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPoliciesConfig <a name="DataOciWaasWaasPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string[] DisplayNames = null,
    object Filter = null,
    string Id = null,
    string[] Ids = null,
    string[] States = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.displayNames">DisplayNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.ids">Ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.states">States</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}.

---

##### `DisplayNames`<sup>Optional</sup> <a name="DisplayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.displayNames"></a>

```csharp
public string[] DisplayNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#filter DataOciWaasWaasPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}.

---

##### `States`<sup>Optional</sup> <a name="States" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.states"></a>

```csharp
public string[] States { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}.

---

### DataOciWaasWaasPoliciesFilter <a name="DataOciWaasWaasPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#name DataOciWaasWaasPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#values DataOciWaasWaasPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#regex DataOciWaasWaasPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#name DataOciWaasWaasPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#values DataOciWaasWaasPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#regex DataOciWaasWaasPolicies#regex}.

---

### DataOciWaasWaasPoliciesWaasPolicies <a name="DataOciWaasWaasPoliciesWaasPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPolicies {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroups <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroups {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesOrigins <a name="DataOciWaasWaasPoliciesWaasPoliciesOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOrigins {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfig <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfig {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings {

};
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPoliciesFilterList <a name="DataOciWaasWaasPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get"></a>

```csharp
private DataOciWaasWaasPoliciesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWaasWaasPoliciesFilterOutputReference <a name="DataOciWaasWaasPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWaasWaasPoliciesWaasPoliciesList <a name="DataOciWaasWaasPoliciesWaasPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups">DataOciWaasWaasPoliciesWaasPoliciesOriginGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.originGroup"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList OriginGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups">DataOciWaasWaasPoliciesWaasPoliciesOriginGroups</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.customHeaders">CustomHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins">DataOciWaasWaasPoliciesWaasPoliciesOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.customHeaders"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList CustomHeaders { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList</a>

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOrigins InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins">DataOciWaasWaasPoliciesWaasPoliciesOrigins</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.additionalDomains">AdditionalDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.originGroups">OriginGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.origins">Origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList">DataOciWaasWaasPoliciesWaasPoliciesOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.policyConfig">PolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.wafConfig">WafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies">DataOciWaasWaasPoliciesWaasPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalDomains`<sup>Required</sup> <a name="AdditionalDomains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.additionalDomains"></a>

```csharp
public string[] AdditionalDomains { get; }
```

- *Type:* string[]

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.originGroups"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList OriginGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.origins"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesOriginsList Origins { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList">DataOciWaasWaasPoliciesWaasPoliciesOriginsList</a>

---

##### `PolicyConfig`<sup>Required</sup> <a name="PolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.policyConfig"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList PolicyConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.wafConfig"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigList WafConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies">DataOciWaasWaasPoliciesWaasPolicies</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">ExpectedResponseCodeGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseText">ExpectedResponseText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.headers">Headers</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">IsResponseTextCheckEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectedResponseCodeGroup`<sup>Required</sup> <a name="ExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```csharp
public string[] ExpectedResponseCodeGroup { get; }
```

- *Type:* string[]

---

##### `ExpectedResponseText`<sup>Required</sup> <a name="ExpectedResponseText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```csharp
public string ExpectedResponseText { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.headers"></a>

```csharp
public StringMap Headers { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResponseTextCheckEnabled`<sup>Required</sup> <a name="IsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```csharp
public IResolvable IsResponseTextCheckEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">ExpirationTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExpirationTimeInSeconds`<sup>Required</sup> <a name="ExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```csharp
public double ExpirationTimeInSeconds { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.cipherGroup">CipherGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.clientAddressHeader">ClientAddressHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isBehindCdn">IsBehindCdn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isCacheControlRespected">IsCacheControlRespected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsEnabled">IsHttpsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsForced">IsHttpsForced</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isOriginCompressionEnabled">IsOriginCompressionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isResponseBufferingEnabled">IsResponseBufferingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isSniEnabled">IsSniEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.loadBalancingMethod">LoadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.tlsProtocols">TlsProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.websocketPathPrefixes">WebsocketPathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CipherGroup`<sup>Required</sup> <a name="CipherGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.cipherGroup"></a>

```csharp
public string CipherGroup { get; }
```

- *Type:* string

---

##### `ClientAddressHeader`<sup>Required</sup> <a name="ClientAddressHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.clientAddressHeader"></a>

```csharp
public string ClientAddressHeader { get; }
```

- *Type:* string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.healthChecks"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList HealthChecks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList</a>

---

##### `IsBehindCdn`<sup>Required</sup> <a name="IsBehindCdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isBehindCdn"></a>

```csharp
public IResolvable IsBehindCdn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsCacheControlRespected`<sup>Required</sup> <a name="IsCacheControlRespected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```csharp
public IResolvable IsCacheControlRespected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHttpsEnabled`<sup>Required</sup> <a name="IsHttpsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```csharp
public IResolvable IsHttpsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHttpsForced`<sup>Required</sup> <a name="IsHttpsForced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsForced"></a>

```csharp
public IResolvable IsHttpsForced { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOriginCompressionEnabled`<sup>Required</sup> <a name="IsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```csharp
public IResolvable IsOriginCompressionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResponseBufferingEnabled`<sup>Required</sup> <a name="IsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```csharp
public IResolvable IsResponseBufferingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSniEnabled`<sup>Required</sup> <a name="IsSniEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isSniEnabled"></a>

```csharp
public IResolvable IsSniEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LoadBalancingMethod`<sup>Required</sup> <a name="LoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList LoadBalancingMethod { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList</a>

---

##### `TlsProtocols`<sup>Required</sup> <a name="TlsProtocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.tlsProtocols"></a>

```csharp
public string[] TlsProtocols { get; }
```

- *Type:* string[]

---

##### `WebsocketPathPrefixes`<sup>Required</sup> <a name="WebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```csharp
public string[] WebsocketPathPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```csharp
public IResolvable IsCaseSensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.bypassChallenges">BypassChallenges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">ResponseHeaderManipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `BypassChallenges`<sup>Required</sup> <a name="BypassChallenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```csharp
public string[] BypassChallenges { get; }
```

- *Type:* string[]

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectResponseCode`<sup>Required</sup> <a name="RedirectResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```csharp
public string RedirectResponseCode { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `ResponseHeaderManipulation`<sup>Required</sup> <a name="ResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList ResponseHeaderManipulation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">AllowedRatePerAddress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">MaxDelayedCountPerAddress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRatePerAddress`<sup>Required</sup> <a name="AllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```csharp
public double AllowedRatePerAddress { get; }
```

- *Type:* double

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxDelayedCountPerAddress`<sup>Required</sup> <a name="MaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```csharp
public double MaxDelayedCountPerAddress { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.cachingDuration">CachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.clientCachingDuration">ClientCachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">IsClientCachingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CachingDuration`<sup>Required</sup> <a name="CachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```csharp
public string CachingDuration { get; }
```

- *Type:* string

---

##### `ClientCachingDuration`<sup>Required</sup> <a name="ClientCachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```csharp
public string ClientCachingDuration { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList</a>

---

##### `IsClientCachingEnabled`<sup>Required</sup> <a name="IsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```csharp
public IResolvable IsClientCachingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">SessionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.submitLabel">SubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `SessionExpirationInSeconds`<sup>Required</sup> <a name="SessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```csharp
public double SessionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `SubmitLabel`<sup>Required</sup> <a name="SubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.submitLabel"></a>

```csharp
public string SubmitLabel { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">MaxAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">MaxAddressCountExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```csharp
public double FailureThresholdExpirationInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxAddressCount`<sup>Required</sup> <a name="MaxAddressCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```csharp
public double MaxAddressCount { get; }
```

- *Type:* double

---

##### `MaxAddressCountExpirationInSeconds`<sup>Required</sup> <a name="MaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```csharp
public double MaxAddressCountExpirationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">InteractionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">RecordingPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```csharp
public double FailureThresholdExpirationInSeconds { get; }
```

- *Type:* double

---

##### `InteractionThreshold`<sup>Required</sup> <a name="InteractionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```csharp
public double InteractionThreshold { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```csharp
public IResolvable IsNatEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RecordingPeriodInSeconds`<sup>Required</sup> <a name="RecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```csharp
public double RecordingPeriodInSeconds { get; }
```

- *Type:* double

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList SetHttpHeader { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```csharp
public IResolvable IsCaseSensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">AreRedirectsChallenged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `AreRedirectsChallenged`<sup>Required</sup> <a name="AreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```csharp
public IResolvable AreRedirectsChallenged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```csharp
public IResolvable IsNatEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList SetHttpHeader { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.addressRateLimiting">AddressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.cachingRules">CachingRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.captchas">Captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.customProtectionRules">CustomProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.deviceFingerprintChallenge">DeviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.humanInteractionChallenge">HumanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.jsChallenge">JsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.originGroups">OriginGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.protectionSettings">ProtectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.whitelists">Whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig">DataOciWaasWaasPoliciesWaasPoliciesWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.accessRules"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList AccessRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList</a>

---

##### `AddressRateLimiting`<sup>Required</sup> <a name="AddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.addressRateLimiting"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList AddressRateLimiting { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList</a>

---

##### `CachingRules`<sup>Required</sup> <a name="CachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.cachingRules"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList CachingRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList</a>

---

##### `Captchas`<sup>Required</sup> <a name="Captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.captchas"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList Captchas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList</a>

---

##### `CustomProtectionRules`<sup>Required</sup> <a name="CustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.customProtectionRules"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList CustomProtectionRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList</a>

---

##### `DeviceFingerprintChallenge`<sup>Required</sup> <a name="DeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList DeviceFingerprintChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList</a>

---

##### `HumanInteractionChallenge`<sup>Required</sup> <a name="HumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.humanInteractionChallenge"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList HumanInteractionChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList</a>

---

##### `JsChallenge`<sup>Required</sup> <a name="JsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.jsChallenge"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList JsChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.originGroups"></a>

```csharp
public string[] OriginGroups { get; }
```

- *Type:* string[]

---

##### `ProtectionSettings`<sup>Required</sup> <a name="ProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.protectionSettings"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList ProtectionSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList</a>

---

##### `Whitelists`<sup>Required</sup> <a name="Whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.whitelists"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList Whitelists { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig">DataOciWaasWaasPoliciesWaasPoliciesWafConfig</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.isResponseInspected">IsResponseInspected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">MaxArgumentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">MaxNameLengthPerArgument</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">MaxResponseSizeInKiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">MaxTotalNameLengthOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">RecommendationsPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `IsResponseInspected`<sup>Required</sup> <a name="IsResponseInspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```csharp
public IResolvable IsResponseInspected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxArgumentCount`<sup>Required</sup> <a name="MaxArgumentCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```csharp
public double MaxArgumentCount { get; }
```

- *Type:* double

---

##### `MaxNameLengthPerArgument`<sup>Required</sup> <a name="MaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```csharp
public double MaxNameLengthPerArgument { get; }
```

- *Type:* double

---

##### `MaxResponseSizeInKiB`<sup>Required</sup> <a name="MaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```csharp
public double MaxResponseSizeInKiB { get; }
```

- *Type:* double

---

##### `MaxTotalNameLengthOfArguments`<sup>Required</sup> <a name="MaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```csharp
public double MaxTotalNameLengthOfArguments { get; }
```

- *Type:* double

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```csharp
public string[] MediaTypes { get; }
```

- *Type:* string[]

---

##### `RecommendationsPeriodInDays`<sup>Required</sup> <a name="RecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```csharp
public double RecommendationsPeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get"></a>

```csharp
private DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists</a>

---



