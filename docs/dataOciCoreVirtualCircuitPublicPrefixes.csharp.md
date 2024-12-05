# `dataOciCoreVirtualCircuitPublicPrefixes` Submodule <a name="`dataOciCoreVirtualCircuitPublicPrefixes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesA <a name="DataOciCoreVirtualCircuitPublicPrefixesA" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes oci_core_virtual_circuit_public_prefixes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesA(Construct Scope, string Id, DataOciCoreVirtualCircuitPublicPrefixesAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig">DataOciCoreVirtualCircuitPublicPrefixesAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig">DataOciCoreVirtualCircuitPublicPrefixesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState">ResetVerificationState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVerificationState` <a name="ResetVerificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState"></a>

```csharp
private void ResetVerificationState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitPublicPrefixesA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitPublicPrefixesA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitPublicPrefixesA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVirtualCircuitPublicPrefixesA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuitPublicPrefixesA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuitPublicPrefixesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitPublicPrefixesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes">VirtualCircuitPublicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput">VerificationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput">VirtualCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState">VerificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter"></a>

```csharp
public DataOciCoreVirtualCircuitPublicPrefixesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a>

---

##### `VirtualCircuitPublicPrefixes`<sup>Required</sup> <a name="VirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes"></a>

```csharp
public DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList VirtualCircuitPublicPrefixes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VerificationStateInput`<sup>Optional</sup> <a name="VerificationStateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput"></a>

```csharp
public string VerificationStateInput { get; }
```

- *Type:* string

---

##### `VirtualCircuitIdInput`<sup>Optional</sup> <a name="VirtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput"></a>

```csharp
public string VirtualCircuitIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VerificationState`<sup>Required</sup> <a name="VerificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState"></a>

```csharp
public string VerificationState { get; }
```

- *Type:* string

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesAConfig <a name="DataOciCoreVirtualCircuitPublicPrefixesAConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualCircuitId,
    object Filter = null,
    string Id = null,
    string VerificationState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState">VerificationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId"></a>

```csharp
public string VirtualCircuitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#filter DataOciCoreVirtualCircuitPublicPrefixesA#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VerificationState`<sup>Optional</sup> <a name="VerificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState"></a>

```csharp
public string VerificationState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}.

---

### DataOciCoreVirtualCircuitPublicPrefixesFilter <a name="DataOciCoreVirtualCircuitPublicPrefixesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}.

---

### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitPublicPrefixesFilterList <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get"></a>

```csharp
private DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get"></a>

```csharp
private DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState">VerificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `VerificationState`<sup>Required</sup> <a name="VerificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState"></a>

```csharp
public string VerificationState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a>

---



