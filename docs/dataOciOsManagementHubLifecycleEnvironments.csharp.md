# `dataOciOsManagementHubLifecycleEnvironments` Submodule <a name="`dataOciOsManagementHubLifecycleEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleEnvironments <a name="DataOciOsManagementHubLifecycleEnvironments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments oci_os_management_hub_lifecycle_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironments(Construct Scope, string Id, DataOciOsManagementHubLifecycleEnvironmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig">DataOciOsManagementHubLifecycleEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig">DataOciOsManagementHubLifecycleEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId">ResetLifecycleEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo">ResetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetArchType` <a name="ResetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType"></a>

```csharp
private void ResetArchType()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleEnvironmentId` <a name="ResetLifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId"></a>

```csharp
private void ResetLifecycleEnvironmentId()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLocationNotEqualTo` <a name="ResetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo"></a>

```csharp
private void ResetLocationNotEqualTo()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubLifecycleEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubLifecycleEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubLifecycleEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection">LifecycleEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput">ArchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput">DisplayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput">LifecycleEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput">LocationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput">LocationNotEqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName">DisplayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location">Location</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a>

---

##### `LifecycleEnvironmentCollection`<sup>Required</sup> <a name="LifecycleEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList LifecycleEnvironmentCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput"></a>

```csharp
public string ArchTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput"></a>

```csharp
public string[] DisplayNameInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleEnvironmentIdInput`<sup>Optional</sup> <a name="LifecycleEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput"></a>

```csharp
public string LifecycleEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput"></a>

```csharp
public string[] LocationInput { get; }
```

- *Type:* string[]

---

##### `LocationNotEqualToInput`<sup>Optional</sup> <a name="LocationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput"></a>

```csharp
public string[] LocationNotEqualToInput { get; }
```

- *Type:* string[]

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName"></a>

```csharp
public string[] DisplayName { get; }
```

- *Type:* string[]

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleEnvironmentId`<sup>Required</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId"></a>

```csharp
public string LifecycleEnvironmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location"></a>

```csharp
public string[] Location { get; }
```

- *Type:* string[]

---

##### `LocationNotEqualTo`<sup>Required</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo"></a>

```csharp
public string[] LocationNotEqualTo { get; }
```

- *Type:* string[]

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleEnvironmentsConfig <a name="DataOciOsManagementHubLifecycleEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArchType = null,
    string CompartmentId = null,
    string[] DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null,
    string LifecycleEnvironmentId = null,
    string[] Location = null,
    string[] LocationNotEqualTo = null,
    string OsFamily = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType">ArchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName">DisplayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location">Location</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType"></a>

```csharp
public string ArchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName"></a>

```csharp
public string[] DisplayName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#filter DataOciOsManagementHubLifecycleEnvironments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleEnvironmentId`<sup>Optional</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId"></a>

```csharp
public string LifecycleEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location"></a>

```csharp
public string[] Location { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}.

---

##### `LocationNotEqualTo`<sup>Optional</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo"></a>

```csharp
public string[] LocationNotEqualTo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}.

---

### DataOciOsManagementHubLifecycleEnvironmentsFilter <a name="DataOciOsManagementHubLifecycleEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}.

---

### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection {

};
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems {

};
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages {

};
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleEnvironmentsFilterList <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages">Stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList Stages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType">ArchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName">LifecycleEnvironmentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank">Rank</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType"></a>

```csharp
public string ArchType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleEnvironmentDisplayName`<sup>Required</sup> <a name="LifecycleEnvironmentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName"></a>

```csharp
public string LifecycleEnvironmentDisplayName { get; }
```

- *Type:* string

---

##### `LifecycleEnvironmentId`<sup>Required</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId"></a>

```csharp
public string LifecycleEnvironmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances"></a>

```csharp
public double ManagedInstances { get; }
```

- *Type:* double

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank"></a>

```csharp
public double Rank { get; }
```

- *Type:* double

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList SoftwareSourceId { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```csharp
public IResolvable IsMandatoryForAutonomousLinux { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```csharp
public string SoftwareSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get"></a>

```csharp
private DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a>

---



