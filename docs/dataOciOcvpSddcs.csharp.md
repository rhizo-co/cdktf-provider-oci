# `dataOciOcvpSddcs` Submodule <a name="`dataOciOcvpSddcs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSddcs <a name="DataOciOcvpSddcs" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs oci_ocvp_sddcs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcs(Construct Scope, string Id, DataOciOcvpSddcsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig">DataOciOcvpSddcsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig">DataOciOcvpSddcsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain">ResetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetComputeAvailabilityDomain` <a name="ResetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain"></a>

```csharp
private void ResetComputeAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddcs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddcs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddcs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddcs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpSddcs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpSddcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSddcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection">SddcCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter"></a>

```csharp
public DataOciOcvpSddcsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a>

---

##### `SddcCollection`<sup>Required</sup> <a name="SddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionList SddcCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput"></a>

```csharp
public string ComputeAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSddcsConfig <a name="DataOciOcvpSddcsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ComputeAvailabilityDomain = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}.

---

##### `ComputeAvailabilityDomain`<sup>Optional</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#filter DataOciOcvpSddcs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}.

---

### DataOciOcvpSddcsFilter <a name="DataOciOcvpSddcsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}.

---

### DataOciOcvpSddcsSddcCollection <a name="DataOciOcvpSddcsSddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollection {

};
```


### DataOciOcvpSddcsSddcCollectionDatastores <a name="DataOciOcvpSddcsSddcCollectionDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionDatastores {

};
```


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses {

};
```


### DataOciOcvpSddcsSddcCollectionInitialConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfiguration {

};
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations {

};
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores {

};
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {

};
```


### DataOciOcvpSddcsSddcCollectionUpgradeLicenses <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionUpgradeLicenses {

};
```


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSddcsFilterList <a name="DataOciOcvpSddcsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get"></a>

```csharp
private DataOciOcvpSddcsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOcvpSddcsFilterOutputReference <a name="DataOciOcvpSddcsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOcvpSddcsSddcCollectionDatastoresList <a name="DataOciOcvpSddcsSddcCollectionDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionDatastores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey">ActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName">SystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey"></a>

```csharp
public string ActivationKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName"></a>

```csharp
public string SystemName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">VsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `InitialCommitment`<sup>Required</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```csharp
public IResolvable IsShieldedInstanceEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a>

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```csharp
public string VsphereType { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList InitialClusterConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionList <a name="DataOciOcvpSddcsSddcCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionOutputReference <a name="DataOciOcvpSddcsSddcCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount">ClustersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction">HcxAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn">HcxFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword">HcxInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode">HcxMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey">HcxOnPremKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses">HcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId">HcxPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration">InitialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku">InitialSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled">IsHcxEnterpriseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade">IsHcxPendingDowngrade</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId">NsxEdgeUplinkIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn">NsxManagerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword">NsxManagerInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId">NsxManagerPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername">NsxManagerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName">NsxOverlaySegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd">TimeHcxBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated">TimeHcxLicenseStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses">UpgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn">VcenterFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword">VcenterInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId">VcenterPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername">VcenterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide">VsphereUpgradeGuide</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects">VsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClustersCount`<sup>Required</sup> <a name="ClustersCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount"></a>

```csharp
public double ClustersCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HcxAction`<sup>Required</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction"></a>

```csharp
public string HcxAction { get; }
```

- *Type:* string

---

##### `HcxFqdn`<sup>Required</sup> <a name="HcxFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn"></a>

```csharp
public string HcxFqdn { get; }
```

- *Type:* string

---

##### `HcxInitialPassword`<sup>Required</sup> <a name="HcxInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword"></a>

```csharp
public string HcxInitialPassword { get; }
```

- *Type:* string

---

##### `HcxMode`<sup>Required</sup> <a name="HcxMode" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode"></a>

```csharp
public string HcxMode { get; }
```

- *Type:* string

---

##### `HcxOnPremKey`<sup>Required</sup> <a name="HcxOnPremKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey"></a>

```csharp
public string HcxOnPremKey { get; }
```

- *Type:* string

---

##### `HcxOnPremLicenses`<sup>Required</sup> <a name="HcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList HcxOnPremLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a>

---

##### `HcxPrivateIpId`<sup>Required</sup> <a name="HcxPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId"></a>

```csharp
public string HcxPrivateIpId { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialConfiguration`<sup>Required</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionInitialConfigurationList InitialConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a>

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InitialSku`<sup>Required</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku"></a>

```csharp
public string InitialSku { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsHcxEnabled`<sup>Required</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled"></a>

```csharp
public IResolvable IsHcxEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHcxEnterpriseEnabled`<sup>Required</sup> <a name="IsHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled"></a>

```csharp
public IResolvable IsHcxEnterpriseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHcxPendingDowngrade`<sup>Required</sup> <a name="IsHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade"></a>

```csharp
public IResolvable IsHcxPendingDowngrade { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled"></a>

```csharp
public IResolvable IsShieldedInstanceEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSingleHostSddc`<sup>Required</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc"></a>

```csharp
public IResolvable IsSingleHostSddc { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplinkIpId`<sup>Required</sup> <a name="NsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId"></a>

```csharp
public string NsxEdgeUplinkIpId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxManagerFqdn`<sup>Required</sup> <a name="NsxManagerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn"></a>

```csharp
public string NsxManagerFqdn { get; }
```

- *Type:* string

---

##### `NsxManagerInitialPassword`<sup>Required</sup> <a name="NsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword"></a>

```csharp
public string NsxManagerInitialPassword { get; }
```

- *Type:* string

---

##### `NsxManagerPrivateIpId`<sup>Required</sup> <a name="NsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId"></a>

```csharp
public string NsxManagerPrivateIpId { get; }
```

- *Type:* string

---

##### `NsxManagerUsername`<sup>Required</sup> <a name="NsxManagerUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername"></a>

```csharp
public string NsxManagerUsername { get; }
```

- *Type:* string

---

##### `NsxOverlaySegmentName`<sup>Required</sup> <a name="NsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName"></a>

```csharp
public string NsxOverlaySegmentName { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `RefreshHcxLicenseStatus`<sup>Required</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus"></a>

```csharp
public IResolvable RefreshHcxLicenseStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys"></a>

```csharp
public string[] ReservingHcxOnPremiseLicenseKeys { get; }
```

- *Type:* string[]

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys"></a>

```csharp
public string SshAuthorizedKeys { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeHcxBillingCycleEnd`<sup>Required</sup> <a name="TimeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd"></a>

```csharp
public string TimeHcxBillingCycleEnd { get; }
```

- *Type:* string

---

##### `TimeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="TimeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated"></a>

```csharp
public string TimeHcxLicenseStatusUpdated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeLicenses`<sup>Required</sup> <a name="UpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionUpgradeLicensesList UpgradeLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a>

---

##### `VcenterFqdn`<sup>Required</sup> <a name="VcenterFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn"></a>

```csharp
public string VcenterFqdn { get; }
```

- *Type:* string

---

##### `VcenterInitialPassword`<sup>Required</sup> <a name="VcenterInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword"></a>

```csharp
public string VcenterInitialPassword { get; }
```

- *Type:* string

---

##### `VcenterPrivateIpId`<sup>Required</sup> <a name="VcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId"></a>

```csharp
public string VcenterPrivateIpId { get; }
```

- *Type:* string

---

##### `VcenterUsername`<sup>Required</sup> <a name="VcenterUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername"></a>

```csharp
public string VcenterUsername { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereUpgradeGuide`<sup>Required</sup> <a name="VsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide"></a>

```csharp
public string VsphereUpgradeGuide { get; }
```

- *Type:* string

---

##### `VsphereUpgradeObjects`<sup>Required</sup> <a name="VsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList VsphereUpgradeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a>

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a>

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesList <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionUpgradeLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey">LicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey"></a>

```csharp
public string LicenseKey { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionUpgradeLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get"></a>

```csharp
private DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink">DownloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription">LinkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownloadLink`<sup>Required</sup> <a name="DownloadLink" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```csharp
public string DownloadLink { get; }
```

- *Type:* string

---

##### `LinkDescription`<sup>Required</sup> <a name="LinkDescription" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```csharp
public string LinkDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a>

---



