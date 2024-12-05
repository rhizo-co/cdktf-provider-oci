# `dataOciGoldenGateDeploymentUpgrade` Submodule <a name="`dataOciGoldenGateDeploymentUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentUpgrade <a name="DataOciGoldenGateDeploymentUpgrade" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade oci_golden_gate_deployment_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentUpgrade(Construct Scope, string Id, DataOciGoldenGateDeploymentUpgradeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig">DataOciGoldenGateDeploymentUpgradeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig">DataOciGoldenGateDeploymentUpgradeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentUpgrade.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentUpgrade.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentUpgrade.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentUpgrade.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentUpgrade resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeploymentUpgrade to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeploymentUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeType">DeploymentUpgradeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isCancelAllowed">IsCancelAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRescheduleAllowed">IsRescheduleAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRollbackAllowed">IsRollbackAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSecurityFix">IsSecurityFix</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSnoozed">IsSnoozed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.previousOggVersion">PreviousOggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.releaseType">ReleaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeOggVersionSupportedUntil">TimeOggVersionSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeReleased">TimeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSchedule">TimeSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeScheduleMax">TimeScheduleMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSnoozedUntil">TimeSnoozedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeIdInput">DeploymentUpgradeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeId">DeploymentUpgradeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DeploymentUpgradeType`<sup>Required</sup> <a name="DeploymentUpgradeType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeType"></a>

```csharp
public string DeploymentUpgradeType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsCancelAllowed`<sup>Required</sup> <a name="IsCancelAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isCancelAllowed"></a>

```csharp
public IResolvable IsCancelAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRescheduleAllowed`<sup>Required</sup> <a name="IsRescheduleAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRescheduleAllowed"></a>

```csharp
public IResolvable IsRescheduleAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRollbackAllowed`<sup>Required</sup> <a name="IsRollbackAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRollbackAllowed"></a>

```csharp
public IResolvable IsRollbackAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSecurityFix`<sup>Required</sup> <a name="IsSecurityFix" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSecurityFix"></a>

```csharp
public IResolvable IsSecurityFix { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSnoozed`<sup>Required</sup> <a name="IsSnoozed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSnoozed"></a>

```csharp
public IResolvable IsSnoozed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `PreviousOggVersion`<sup>Required</sup> <a name="PreviousOggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.previousOggVersion"></a>

```csharp
public string PreviousOggVersion { get; }
```

- *Type:* string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.releaseType"></a>

```csharp
public string ReleaseType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeOggVersionSupportedUntil`<sup>Required</sup> <a name="TimeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeOggVersionSupportedUntil"></a>

```csharp
public string TimeOggVersionSupportedUntil { get; }
```

- *Type:* string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeReleased"></a>

```csharp
public string TimeReleased { get; }
```

- *Type:* string

---

##### `TimeSchedule`<sup>Required</sup> <a name="TimeSchedule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSchedule"></a>

```csharp
public string TimeSchedule { get; }
```

- *Type:* string

---

##### `TimeScheduleMax`<sup>Required</sup> <a name="TimeScheduleMax" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeScheduleMax"></a>

```csharp
public string TimeScheduleMax { get; }
```

- *Type:* string

---

##### `TimeSnoozedUntil`<sup>Required</sup> <a name="TimeSnoozedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSnoozedUntil"></a>

```csharp
public string TimeSnoozedUntil { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DeploymentUpgradeIdInput`<sup>Optional</sup> <a name="DeploymentUpgradeIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeIdInput"></a>

```csharp
public string DeploymentUpgradeIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DeploymentUpgradeId`<sup>Required</sup> <a name="DeploymentUpgradeId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeId"></a>

```csharp
public string DeploymentUpgradeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentUpgradeConfig <a name="DataOciGoldenGateDeploymentUpgradeConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentUpgradeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentUpgradeId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.deploymentUpgradeId">DeploymentUpgradeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#deployment_upgrade_id DataOciGoldenGateDeploymentUpgrade#deployment_upgrade_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#id DataOciGoldenGateDeploymentUpgrade#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentUpgradeId`<sup>Required</sup> <a name="DeploymentUpgradeId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.deploymentUpgradeId"></a>

```csharp
public string DeploymentUpgradeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#deployment_upgrade_id DataOciGoldenGateDeploymentUpgrade#deployment_upgrade_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#id DataOciGoldenGateDeploymentUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



