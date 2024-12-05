# `dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule <a name="`dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states oci_data_safe_security_policy_deployment_security_policy_entry_states}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates(Construct Scope, string Id, DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus">ResetDeploymentStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId">ResetSecurityPolicyEntryId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDeploymentStatus` <a name="ResetDeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus"></a>

```csharp
private void ResetDeploymentStatus()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityPolicyEntryId` <a name="ResetSecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId"></a>

```csharp
private void ResetSecurityPolicyEntryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection">SecurityPolicyEntryStateCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput">DeploymentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput">SecurityPolicyDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput">SecurityPolicyEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a>

---

##### `SecurityPolicyEntryStateCollection`<sup>Required</sup> <a name="SecurityPolicyEntryStateCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList SecurityPolicyEntryStateCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a>

---

##### `DeploymentStatusInput`<sup>Optional</sup> <a name="DeploymentStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput"></a>

```csharp
public string DeploymentStatusInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentIdInput`<sup>Optional</sup> <a name="SecurityPolicyDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput"></a>

```csharp
public string SecurityPolicyDeploymentIdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyEntryIdInput`<sup>Optional</sup> <a name="SecurityPolicyEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput"></a>

```csharp
public string SecurityPolicyEntryIdInput { get; }
```

- *Type:* string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; }
```

- *Type:* string

---

##### `SecurityPolicyEntryId`<sup>Required</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId"></a>

```csharp
public string SecurityPolicyEntryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityPolicyDeploymentId,
    string DeploymentStatus = null,
    object Filter = null,
    string Id = null,
    string SecurityPolicyEntryId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}.

---

##### `DeploymentStatus`<sup>Optional</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#filter DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityPolicyEntryId`<sup>Optional</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId"></a>

```csharp
public string SecurityPolicyEntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection {

};
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems {

};
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType">EntryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated">TimeGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType"></a>

```csharp
public string EntryType { get; }
```

- *Type:* string

---

##### `TimeGenerated`<sup>Required</sup> <a name="TimeGenerated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated"></a>

```csharp
public string TimeGenerated { get; }
```

- *Type:* string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails">EntryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId">SecurityPolicyDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId">SecurityPolicyEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; }
```

- *Type:* string

---

##### `EntryDetails`<sup>Required</sup> <a name="EntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList EntryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyDeploymentId`<sup>Required</sup> <a name="SecurityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId"></a>

```csharp
public string SecurityPolicyDeploymentId { get; }
```

- *Type:* string

---

##### `SecurityPolicyEntryId`<sup>Required</sup> <a name="SecurityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId"></a>

```csharp
public string SecurityPolicyEntryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a>

---


