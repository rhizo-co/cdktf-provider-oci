# `dataOciIdentityDomainsApprovalWorkflowSteps` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowSteps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps oci_identity_domains_approval_workflow_steps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowSteps(Construct Scope, string Id, DataOciIdentityDomainsApprovalWorkflowStepsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig">DataOciIdentityDomainsApprovalWorkflowStepsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig">DataOciIdentityDomainsApprovalWorkflowStepsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount">ResetApprovalWorkflowStepCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter">ResetApprovalWorkflowStepFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApprovalWorkflowStepCount` <a name="ResetApprovalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount"></a>

```csharp
private void ResetApprovalWorkflowStepCount()
```

##### `ResetApprovalWorkflowStepFilter` <a name="ResetApprovalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter"></a>

```csharp
private void ResetApprovalWorkflowStepFilter()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowSteps.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowSteps.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowSteps.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowSteps.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowSteps to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowSteps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowSteps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps">ApprovalWorkflowSteps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput">ApprovalWorkflowStepCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput">ApprovalWorkflowStepFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount">ApprovalWorkflowStepCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter">ApprovalWorkflowStepFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalWorkflowSteps`<sup>Required</sup> <a name="ApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList ApprovalWorkflowSteps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowStepCountInput`<sup>Optional</sup> <a name="ApprovalWorkflowStepCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput"></a>

```csharp
public double ApprovalWorkflowStepCountInput { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowStepFilterInput`<sup>Optional</sup> <a name="ApprovalWorkflowStepFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput"></a>

```csharp
public string ApprovalWorkflowStepFilterInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowStepCount`<sup>Required</sup> <a name="ApprovalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount"></a>

```csharp
public double ApprovalWorkflowStepCount { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowStepFilter`<sup>Required</sup> <a name="ApprovalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter"></a>

```csharp
public string ApprovalWorkflowStepFilter { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags {

};
```


### DataOciIdentityDomainsApprovalWorkflowStepsConfig <a name="DataOciIdentityDomainsApprovalWorkflowStepsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    double ApprovalWorkflowStepCount = null,
    string ApprovalWorkflowStepFilter = null,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string CompartmentId = null,
    string Id = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount">ApprovalWorkflowStepCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter">ApprovalWorkflowStepFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}.

---

##### `ApprovalWorkflowStepCount`<sup>Optional</sup> <a name="ApprovalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount"></a>

```csharp
public double ApprovalWorkflowStepCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}.

---

##### `ApprovalWorkflowStepFilter`<sup>Optional</sup> <a name="ApprovalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter"></a>

```csharp
public string ApprovalWorkflowStepFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers">Approvers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions">ApproversExpressions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals">MinimumApprovals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList Approvers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a>

---

##### `ApproversExpressions`<sup>Required</sup> <a name="ApproversExpressions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions"></a>

```csharp
public string[] ApproversExpressions { get; }
```

- *Type:* string[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a>

---

##### `MinimumApprovals`<sup>Required</sup> <a name="MinimumApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals"></a>

```csharp
public double MinimumApprovals { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a>

---



