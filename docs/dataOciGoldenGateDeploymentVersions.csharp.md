# `dataOciGoldenGateDeploymentVersions` Submodule <a name="`dataOciGoldenGateDeploymentVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentVersions <a name="DataOciGoldenGateDeploymentVersions" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions oci_golden_gate_deployment_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersions(Construct Scope, string Id, DataOciGoldenGateDeploymentVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig">DataOciGoldenGateDeploymentVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig">DataOciGoldenGateDeploymentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGoldenGateDeploymentVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDeploymentVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDeploymentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentVersionCollection">DeploymentVersionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList">DataOciGoldenGateDeploymentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeploymentVersionCollection`<sup>Required</sup> <a name="DeploymentVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentVersionCollection"></a>

```csharp
public DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList DeploymentVersionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filter"></a>

```csharp
public DataOciGoldenGateDeploymentVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList">DataOciGoldenGateDeploymentVersionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentVersionsConfig <a name="DataOciGoldenGateDeploymentVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DeploymentId = null,
    string DeploymentType = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#compartment_id DataOciGoldenGateDeploymentVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_id DataOciGoldenGateDeploymentVersions#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_type DataOciGoldenGateDeploymentVersions#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#id DataOciGoldenGateDeploymentVersions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#compartment_id DataOciGoldenGateDeploymentVersions#compartment_id}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_id DataOciGoldenGateDeploymentVersions#deployment_id}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#deployment_type DataOciGoldenGateDeploymentVersions#deployment_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#filter DataOciGoldenGateDeploymentVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#id DataOciGoldenGateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection {

};
```


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems {

};
```


### DataOciGoldenGateDeploymentVersionsFilter <a name="DataOciGoldenGateDeploymentVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#name DataOciGoldenGateDeploymentVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#values DataOciGoldenGateDeploymentVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#regex DataOciGoldenGateDeploymentVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#name DataOciGoldenGateDeploymentVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#values DataOciGoldenGateDeploymentVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_versions#regex DataOciGoldenGateDeploymentVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get"></a>

```csharp
private DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.isSecurityFix">IsSecurityFix</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.releaseType">ReleaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeReleased">TimeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeSupportedUntil">TimeSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `IsSecurityFix`<sup>Required</sup> <a name="IsSecurityFix" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.isSecurityFix"></a>

```csharp
public IResolvable IsSecurityFix { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.releaseType"></a>

```csharp
public string ReleaseType { get; }
```

- *Type:* string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeReleased"></a>

```csharp
public string TimeReleased { get; }
```

- *Type:* string

---

##### `TimeSupportedUntil`<sup>Required</sup> <a name="TimeSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.timeSupportedUntil"></a>

```csharp
public string TimeSupportedUntil { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItems</a>

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get"></a>

```csharp
private DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference <a name="DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.items"></a>

```csharp
public DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection">DataOciGoldenGateDeploymentVersionsDeploymentVersionCollection</a>

---


### DataOciGoldenGateDeploymentVersionsFilterList <a name="DataOciGoldenGateDeploymentVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get"></a>

```csharp
private DataOciGoldenGateDeploymentVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciGoldenGateDeploymentVersionsFilterOutputReference <a name="DataOciGoldenGateDeploymentVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGoldenGateDeploymentVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentVersions.DataOciGoldenGateDeploymentVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



