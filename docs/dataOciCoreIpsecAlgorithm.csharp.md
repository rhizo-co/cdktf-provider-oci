# `dataOciCoreIpsecAlgorithm` Submodule <a name="`dataOciCoreIpsecAlgorithm` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecAlgorithm <a name="DataOciCoreIpsecAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithm(Construct Scope, string Id, DataOciCoreIpsecAlgorithmConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig">DataOciCoreIpsecAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecAlgorithm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecAlgorithm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecAlgorithm.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpsecAlgorithm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecAlgorithm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters">AllowedPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters">AllowedPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters">DefaultPhaseOneParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters">DefaultPhaseTwoParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowedPhaseOneParameters`<sup>Required</sup> <a name="AllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters"></a>

```csharp
public DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList AllowedPhaseOneParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a>

---

##### `AllowedPhaseTwoParameters`<sup>Required</sup> <a name="AllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters"></a>

```csharp
public DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList AllowedPhaseTwoParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a>

---

##### `DefaultPhaseOneParameters`<sup>Required</sup> <a name="DefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters"></a>

```csharp
public DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList DefaultPhaseOneParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a>

---

##### `DefaultPhaseTwoParameters`<sup>Required</sup> <a name="DefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters"></a>

```csharp
public DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList DefaultPhaseTwoParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters {

};
```


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters {

};
```


### DataOciCoreIpsecAlgorithmConfig <a name="DataOciCoreIpsecAlgorithmConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters {

};
```


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get"></a>

```csharp
private DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms">AuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups">DhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms">EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationAlgorithms`<sup>Required</sup> <a name="AuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms"></a>

```csharp
public string[] AuthenticationAlgorithms { get; }
```

- *Type:* string[]

---

##### `DhGroups`<sup>Required</sup> <a name="DhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups"></a>

```csharp
public string[] DhGroups { get; }
```

- *Type:* string[]

---

##### `EncryptionAlgorithms`<sup>Required</sup> <a name="EncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms"></a>

```csharp
public string[] EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get"></a>

```csharp
private DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms">AuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms">EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups">PfsDhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationAlgorithms`<sup>Required</sup> <a name="AuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms"></a>

```csharp
public string[] AuthenticationAlgorithms { get; }
```

- *Type:* string[]

---

##### `EncryptionAlgorithms`<sup>Required</sup> <a name="EncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms"></a>

```csharp
public string[] EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `PfsDhGroups`<sup>Required</sup> <a name="PfsDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups"></a>

```csharp
public string[] PfsDhGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get"></a>

```csharp
private DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms">DefaultAuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups">DefaultDhGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms">DefaultEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationAlgorithms`<sup>Required</sup> <a name="DefaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```csharp
public string[] DefaultAuthenticationAlgorithms { get; }
```

- *Type:* string[]

---

##### `DefaultDhGroups`<sup>Required</sup> <a name="DefaultDhGroups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups"></a>

```csharp
public string[] DefaultDhGroups { get; }
```

- *Type:* string[]

---

##### `DefaultEncryptionAlgorithms`<sup>Required</sup> <a name="DefaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```csharp
public string[] DefaultEncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get"></a>

```csharp
private DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms">DefaultAuthenticationAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms">DefaultEncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup">DefaultPfsDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationAlgorithms`<sup>Required</sup> <a name="DefaultAuthenticationAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```csharp
public string[] DefaultAuthenticationAlgorithms { get; }
```

- *Type:* string[]

---

##### `DefaultEncryptionAlgorithms`<sup>Required</sup> <a name="DefaultEncryptionAlgorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```csharp
public string[] DefaultEncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `DefaultPfsDhGroup`<sup>Required</sup> <a name="DefaultPfsDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup"></a>

```csharp
public string DefaultPfsDhGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a>

---



