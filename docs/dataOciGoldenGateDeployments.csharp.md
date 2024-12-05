# `dataOciGoldenGateDeployments` Submodule <a name="`dataOciGoldenGateDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeployments <a name="DataOciGoldenGateDeployments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments oci_golden_gate_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeployments(Construct Scope, string Id, DataOciGoldenGateDeploymentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig">DataOciGoldenGateDeploymentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig">DataOciGoldenGateDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId">ResetAssignableConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId">ResetAssignedConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState">ResetLifecycleSubState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType">ResetSupportedConnectionType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAssignableConnectionId` <a name="ResetAssignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId"></a>

```csharp
private void ResetAssignableConnectionId()
```

##### `ResetAssignedConnectionId` <a name="ResetAssignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId"></a>

```csharp
private void ResetAssignedConnectionId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFqdn` <a name="ResetFqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleSubState` <a name="ResetLifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState"></a>

```csharp
private void ResetLifecycleSubState()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSupportedConnectionType` <a name="ResetSupportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType"></a>

```csharp
private void ResetSupportedConnectionType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeployments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeployments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeployments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeployments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeployments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection">DeploymentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput">AssignableConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput">AssignedConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput">LifecycleSubStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput">SupportedConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId">AssignableConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId">AssignedConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType">SupportedConnectionType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeploymentCollection`<sup>Required</sup> <a name="DeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionList DeploymentCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter"></a>

```csharp
public DataOciGoldenGateDeploymentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a>

---

##### `AssignableConnectionIdInput`<sup>Optional</sup> <a name="AssignableConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput"></a>

```csharp
public string AssignableConnectionIdInput { get; }
```

- *Type:* string

---

##### `AssignedConnectionIdInput`<sup>Optional</sup> <a name="AssignedConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput"></a>

```csharp
public string AssignedConnectionIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleSubStateInput`<sup>Optional</sup> <a name="LifecycleSubStateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput"></a>

```csharp
public string LifecycleSubStateInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SupportedConnectionTypeInput`<sup>Optional</sup> <a name="SupportedConnectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput"></a>

```csharp
public string SupportedConnectionTypeInput { get; }
```

- *Type:* string

---

##### `AssignableConnectionId`<sup>Required</sup> <a name="AssignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId"></a>

```csharp
public string AssignableConnectionId { get; }
```

- *Type:* string

---

##### `AssignedConnectionId`<sup>Required</sup> <a name="AssignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId"></a>

```csharp
public string AssignedConnectionId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedConnectionType`<sup>Required</sup> <a name="SupportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType"></a>

```csharp
public string SupportedConnectionType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentsConfig <a name="DataOciGoldenGateDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AssignableConnectionId = null,
    string AssignedConnectionId = null,
    string DisplayName = null,
    object Filter = null,
    string Fqdn = null,
    string Id = null,
    string LifecycleSubState = null,
    string State = null,
    string SupportedConnectionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId">AssignableConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId">AssignedConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType">SupportedConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}.

---

##### `AssignableConnectionId`<sup>Optional</sup> <a name="AssignableConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId"></a>

```csharp
public string AssignableConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}.

---

##### `AssignedConnectionId`<sup>Optional</sup> <a name="AssignedConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId"></a>

```csharp
public string AssignedConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#filter DataOciGoldenGateDeployments#filter}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleSubState`<sup>Optional</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}.

---

##### `SupportedConnectionType`<sup>Optional</sup> <a name="SupportedConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType"></a>

```csharp
public string SupportedConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}.

---

### DataOciGoldenGateDeploymentsDeploymentCollection <a name="DataOciGoldenGateDeploymentsDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollection {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItems <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItems {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData {

};
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping {

};
```


### DataOciGoldenGateDeploymentsFilter <a name="DataOciGoldenGateDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState">DiagnosticState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">TimeDiagnosticEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">TimeDiagnosticStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DiagnosticState`<sup>Required</sup> <a name="DiagnosticState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```csharp
public string DiagnosticState { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `TimeDiagnosticEnd`<sup>Required</sup> <a name="TimeDiagnosticEnd" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```csharp
public string TimeDiagnosticEnd { get; }
```

- *Type:* string

---

##### `TimeDiagnosticStart`<sup>Required</sup> <a name="TimeDiagnosticStart" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```csharp
public string TimeDiagnosticStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp">IngressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressIp`<sup>Required</sup> <a name="IngressIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp"></a>

```csharp
public string IngressIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">BundleReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">InterimReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">IsInterimReleaseAutoUpgradeEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">MajorReleaseUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">SecurityPatchUpgradePeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="BundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```csharp
public double BundleReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `InterimReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="InterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```csharp
public double InterimReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `IsInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="IsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```csharp
public IResolvable IsInterimReleaseAutoUpgradeEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MajorReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="MajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```csharp
public double MajorReleaseUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `SecurityPatchUpgradePeriodInDays`<sup>Required</sup> <a name="SecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```csharp
public double SecurityPatchUpgradePeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">AdministratorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">OperatorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorGroupId`<sup>Required</sup> <a name="AdministratorGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```csharp
public string AdministratorGroupId { get; }
```

- *Type:* string

---

##### `OperatorGroupId`<sup>Required</sup> <a name="OperatorGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```csharp
public string OperatorGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore">CredentialStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName">DeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping">GroupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId">IdentityDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CredentialStore`<sup>Required</sup> <a name="CredentialStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore"></a>

```csharp
public string CredentialStore { get; }
```

- *Type:* string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName"></a>

```csharp
public string DeploymentName { get; }
```

- *Type:* string

---

##### `GroupToRolesMapping`<sup>Required</sup> <a name="GroupToRolesMapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList GroupToRolesMapping { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a>

---

##### `IdentityDomainId`<sup>Required</sup> <a name="IdentityDomainId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId"></a>

```csharp
public string IdentityDomainId { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId">DeploymentBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData">DeploymentDiagnosticData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl">DeploymentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps">IngressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy">IsHealthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion">IsLatestVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic">IsPublic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded">IsStorageUtilizationLimitExceeded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId">LoadBalancerSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType">NextMaintenanceActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription">NextMaintenanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData">OggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes">StorageUtilizationInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance">TimeOfNextMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil">TimeOggVersionSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired">TimeUpgradeRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeploymentBackupId`<sup>Required</sup> <a name="DeploymentBackupId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId"></a>

```csharp
public string DeploymentBackupId { get; }
```

- *Type:* string

---

##### `DeploymentDiagnosticData`<sup>Required</sup> <a name="DeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList DeploymentDiagnosticData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a>

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DeploymentUrl`<sup>Required</sup> <a name="DeploymentUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl"></a>

```csharp
public string DeploymentUrl { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList IngressIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a>

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHealthy`<sup>Required</sup> <a name="IsHealthy" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy"></a>

```csharp
public IResolvable IsHealthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLatestVersion`<sup>Required</sup> <a name="IsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion"></a>

```csharp
public IResolvable IsLatestVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride"></a>

```csharp
public IResolvable IsLockOverride { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic"></a>

```csharp
public IResolvable IsPublic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="IsStorageUtilizationLimitExceeded" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```csharp
public IResolvable IsStorageUtilizationLimitExceeded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `LoadBalancerSubnetId`<sup>Required</sup> <a name="LoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId"></a>

```csharp
public string LoadBalancerSubnetId { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a>

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList MaintenanceConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a>

---

##### `NextMaintenanceActionType`<sup>Required</sup> <a name="NextMaintenanceActionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType"></a>

```csharp
public string NextMaintenanceActionType { get; }
```

- *Type:* string

---

##### `NextMaintenanceDescription`<sup>Required</sup> <a name="NextMaintenanceDescription" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription"></a>

```csharp
public string NextMaintenanceDescription { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OggData`<sup>Required</sup> <a name="OggData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList OggData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a>

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageUtilizationInBytes`<sup>Required</sup> <a name="StorageUtilizationInBytes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes"></a>

```csharp
public string StorageUtilizationInBytes { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfNextMaintenance`<sup>Required</sup> <a name="TimeOfNextMaintenance" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance"></a>

```csharp
public string TimeOfNextMaintenance { get; }
```

- *Type:* string

---

##### `TimeOggVersionSupportedUntil`<sup>Required</sup> <a name="TimeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil"></a>

```csharp
public string TimeOggVersionSupportedUntil { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeUpgradeRequired`<sup>Required</sup> <a name="TimeUpgradeRequired" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired"></a>

```csharp
public string TimeUpgradeRequired { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentsDeploymentCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a>

---


### DataOciGoldenGateDeploymentsFilterList <a name="DataOciGoldenGateDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get"></a>

```csharp
private DataOciGoldenGateDeploymentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGoldenGateDeploymentsFilterOutputReference <a name="DataOciGoldenGateDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



