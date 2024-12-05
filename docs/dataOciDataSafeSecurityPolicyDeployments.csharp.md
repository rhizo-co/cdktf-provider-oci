# `dataOciDataSafeSecurityPolicyDeployments` Submodule <a name="`dataOciDataSafeSecurityPolicyDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeployments <a name="DataOciDataSafeSecurityPolicyDeployments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments oci_data_safe_security_policy_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeployments(Construct Scope, string Id, DataOciDataSafeSecurityPolicyDeploymentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig">DataOciDataSafeSecurityPolicyDeploymentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig">DataOciDataSafeSecurityPolicyDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetSecurityPolicyDeploymentId">ResetSecurityPolicyDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetSecurityPolicyId">ResetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityPolicyDeploymentId` <a name="ResetSecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetSecurityPolicyDeploymentId"></a>

```csharp
private void ResetSecurityPolicyDeploymentId()
```

##### `ResetSecurityPolicyId` <a name="ResetSecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetSecurityPolicyId"></a>

```csharp
private void ResetSecurityPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeployments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeployments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeployments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeployments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeployments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeployments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList">DataOciDataSafeSecurityPolicyDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentCollection">SecurityPolicyDeploymentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentIdInput">SecurityPolicyDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyIdInput">SecurityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.filter"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList">DataOciDataSafeSecurityPolicyDeploymentsFilterList</a>

---

##### `SecurityPolicyDeploymentCollection`<sup>Required</sup> <a name="SecurityPolicyDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentCollection"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList SecurityPolicyDeploymentCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentIdInput`<sup>Optional</sup> <a name="SecurityPolicyDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentIdInput"></a>

```csharp
public string SecurityPolicyDeploymentIdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyIdInput`<sup>Optional</sup> <a name="SecurityPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyIdInput"></a>

```csharp
public string SecurityPolicyIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeployments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentsConfig <a name="DataOciDataSafeSecurityPolicyDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string SecurityPolicyDeploymentId = null,
    string SecurityPolicyId = null,
    string State = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#compartment_id DataOciDataSafeSecurityPolicyDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#access_level DataOciDataSafeSecurityPolicyDeployments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#compartment_id_in_subtree DataOciDataSafeSecurityPolicyDeployments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#display_name DataOciDataSafeSecurityPolicyDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#id DataOciDataSafeSecurityPolicyDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeployments#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#security_policy_id DataOciDataSafeSecurityPolicyDeployments#security_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#state DataOciDataSafeSecurityPolicyDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#target_id DataOciDataSafeSecurityPolicyDeployments#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#compartment_id DataOciDataSafeSecurityPolicyDeployments#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#access_level DataOciDataSafeSecurityPolicyDeployments#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#compartment_id_in_subtree DataOciDataSafeSecurityPolicyDeployments#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#display_name DataOciDataSafeSecurityPolicyDeployments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#filter DataOciDataSafeSecurityPolicyDeployments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#id DataOciDataSafeSecurityPolicyDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityPolicyDeploymentId`<sup>Optional</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeployments#security_policy_deployment_id}.

---

##### `SecurityPolicyId`<sup>Optional</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#security_policy_id DataOciDataSafeSecurityPolicyDeployments#security_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#state DataOciDataSafeSecurityPolicyDeployments#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#target_id DataOciDataSafeSecurityPolicyDeployments#target_id}.

---

### DataOciDataSafeSecurityPolicyDeploymentsFilter <a name="DataOciDataSafeSecurityPolicyDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#name DataOciDataSafeSecurityPolicyDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#values DataOciDataSafeSecurityPolicyDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#regex DataOciDataSafeSecurityPolicyDeployments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#name DataOciDataSafeSecurityPolicyDeployments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#values DataOciDataSafeSecurityPolicyDeployments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployments#regex DataOciDataSafeSecurityPolicyDeployments#regex}.

---

### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection {

};
```


### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentsFilterList <a name="DataOciDataSafeSecurityPolicyDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeployments.DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection">DataOciDataSafeSecurityPolicyDeploymentsSecurityPolicyDeploymentCollection</a>

---



