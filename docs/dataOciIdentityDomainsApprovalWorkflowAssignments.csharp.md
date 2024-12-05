# `dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments oci_identity_domains_approval_workflow_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignments(Construct Scope, string Id, DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount">ResetApprovalWorkflowAssignmentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter">ResetApprovalWorkflowAssignmentFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApprovalWorkflowAssignmentCount` <a name="ResetApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount"></a>

```csharp
private void ResetApprovalWorkflowAssignmentCount()
```

##### `ResetApprovalWorkflowAssignmentFilter` <a name="ResetApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter"></a>

```csharp
private void ResetApprovalWorkflowAssignmentFilter()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments">ApprovalWorkflowAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput">ApprovalWorkflowAssignmentCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput">ApprovalWorkflowAssignmentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount">ApprovalWorkflowAssignmentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter">ApprovalWorkflowAssignmentFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalWorkflowAssignments`<sup>Required</sup> <a name="ApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList ApprovalWorkflowAssignments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowAssignmentCountInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput"></a>

```csharp
public double ApprovalWorkflowAssignmentCountInput { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowAssignmentFilterInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput"></a>

```csharp
public string ApprovalWorkflowAssignmentFilterInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowAssignmentCount`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount"></a>

```csharp
public double ApprovalWorkflowAssignmentCount { get; }
```

- *Type:* double

---

##### `ApprovalWorkflowAssignmentFilter`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter"></a>

```csharp
public string ApprovalWorkflowAssignmentFilter { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    double ApprovalWorkflowAssignmentCount = null,
    string ApprovalWorkflowAssignmentFilter = null,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount">ApprovalWorkflowAssignmentCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter">ApprovalWorkflowAssignmentFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}.

---

##### `ApprovalWorkflowAssignmentCount`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount"></a>

```csharp
public double ApprovalWorkflowAssignmentCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}.

---

##### `ApprovalWorkflowAssignmentFilter`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter"></a>

```csharp
public string ApprovalWorkflowAssignmentFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo">AssignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType">AssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList ApprovalWorkflow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a>

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList AssignedTo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a>

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType"></a>

```csharp
public string AssignmentType { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a>

---



